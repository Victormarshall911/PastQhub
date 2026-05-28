import { useState, useRef } from 'react';
import { X, Mail, Lock, Loader2, AlertCircle, ShieldCheck } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Turnstile } from '@marsidev/react-turnstile';

// Cloudflare's known test/placeholder strings that should NOT be treated as real keys
const INVALID_KEYS = [
  '',
  'your_turnstile_site_key_here',
  'your_production_site_key_here',
];

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const [captchaStatus, setCaptchaStatus] = useState('idle'); // idle | solving | success | error

  const turnstileRef = useRef(null);
  const rawKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || '';
  // Only use captcha if the site key looks valid
  const siteKey = INVALID_KEYS.includes(rawKey.trim()) ? '' : rawKey.trim();
  const captchaRequired = Boolean(siteKey);
  const captchaReady = !captchaRequired || captchaStatus === 'success';

  if (!isOpen) return null;

  const resetCaptcha = () => {
    setCaptchaToken('');
    setCaptchaStatus('idle');
    if (turnstileRef.current) turnstileRef.current.reset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (captchaRequired && !captchaToken) {
      setError('Please complete the CAPTCHA verification.');
      return;
    }

    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
          options: captchaToken ? { captchaToken } : {},
        });
        if (error) throw error;
        onClose();
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: captchaToken ? { captchaToken } : {},
        });
        if (error) throw error;
        setSuccess('Account created! Check your email to confirm before signing in.');
        resetCaptcha();
      }
    } catch (err) {
      setError(err.message);
      resetCaptcha();
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setSuccess('');
    setPassword('');
    setConfirmPassword('');
    resetCaptcha();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-surface-900/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-100">
          <div>
            <h3 className="text-lg font-bold text-surface-900">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h3>
            <p className="text-xs text-surface-400 mt-0.5">
              {isLogin ? 'Sign in to upload questions' : 'Join PastQHub and contribute'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-surface-100 text-surface-400 hover:text-surface-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Error */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-700 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{success}</span>
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-surface-600 mb-1.5">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-surface-50 border border-surface-200 rounded-xl text-sm
                  focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold text-surface-600 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-surface-50 border border-surface-200 rounded-xl text-sm
                  focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all"
                placeholder="Min. 6 characters"
              />
            </div>
          </div>

          {/* Confirm Password (sign up only) */}
          {!isLogin && (
            <div>
              <label className="block text-xs font-semibold text-surface-600 mb-1.5">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400" />
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-surface-50 border border-surface-200 rounded-xl text-sm
                    focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>
          )}

          {/* Turnstile CAPTCHA */}
          {captchaRequired && (
            <div>
              <div className="flex justify-center mt-1">
                <Turnstile
                  ref={turnstileRef}
                  siteKey={siteKey}
                  onBeforeInteractive={() => setCaptchaStatus('solving')}
                  onSuccess={(token) => {
                    setCaptchaToken(token);
                    setCaptchaStatus('success');
                    setError('');
                  }}
                  onError={() => {
                    setCaptchaStatus('error');
                    setError('CAPTCHA verification failed. Please try again.');
                    setCaptchaToken('');
                  }}
                  onExpire={() => {
                    setCaptchaToken('');
                    setCaptchaStatus('idle');
                  }}
                  options={{ theme: 'light' }}
                />
              </div>
              {captchaStatus === 'idle' && (
                <p className="text-center text-[11px] text-surface-400 mt-1.5">
                  Complete the security check above to continue
                </p>
              )}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading || !captchaReady}
            className="w-full flex items-center justify-center gap-2 px-6 py-2.5
              bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-semibold
              rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-xl hover:-translate-y-0.5
              active:translate-y-0 transition-all duration-200
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg mt-2"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading
              ? (isLogin ? 'Signing in…' : 'Creating account…')
              : (isLogin ? 'Sign In' : 'Sign Up')
            }
          </button>

          {captchaRequired && !captchaReady && !loading && (
            <p className="text-center text-[11px] text-surface-400 -mt-2">
              ☝️ Complete the CAPTCHA to enable the button
            </p>
          )}
        </form>

        {/* Footer toggle */}
        <div className="px-6 py-4 border-t border-surface-100 bg-surface-50 rounded-b-2xl text-center">
          <p className="text-xs text-surface-500">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={toggleMode}
              className="font-bold text-primary-600 hover:text-primary-700 transition-colors"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
