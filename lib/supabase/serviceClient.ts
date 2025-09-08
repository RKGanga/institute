import { createClient } from '@supabase/supabase-js'

// Server-only Supabase client using the Service Role key.
// IMPORTANT: Never import this into client components.
export function createServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  })
}
