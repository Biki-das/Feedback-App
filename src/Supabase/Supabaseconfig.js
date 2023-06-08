import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseToken =
  import.meta.env.VITE_SUPABASE_TOKEN || process.env.SUPABASE_TOKEN;

export const supabase = createClient(supabaseUrl, supabaseToken);
