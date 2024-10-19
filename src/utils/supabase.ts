import { createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { Database } from 'src/types/database';

export const supabase = createClient<any>(
  environment.SUPABASE_URL,
  environment.SUPABASE_ANON_KEY
)