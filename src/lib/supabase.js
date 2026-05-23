import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a dummy mock client if credentials are missing or invalid
// This prevents the React app from white-screening before the user sets up Supabase
const createMockSupabase = () => ({
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
  }
});

let client;
try {
  // createClient throws if URL is missing or invalid
  client = (supabaseUrl && supabaseUrl.startsWith('http')) 
    ? createClient(supabaseUrl, supabaseAnonKey) 
    : createMockSupabase();
} catch (error) {
  console.warn('Failed to initialize Supabase client. Using mock client.', error);
  client = createMockSupabase();
}

export const supabase = client;
