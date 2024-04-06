import { createClient } from "@supabase/supabase-js";

function getSupbaseUrlandToken() {
  const supabaseUrl =
    import.meta.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseToken =
    import.meta.env.VITE_SUPABASE_TOKEN || process.env.SUPABASE_TOKEN;

  if (supabaseUrl === undefined || supabaseToken === undefined) {
    throw new Error("supabase config is undefined");
  }

  return { supabaseUrl, supabaseToken };
}

const { supabaseUrl, supabaseToken } = getSupbaseUrlandToken();

export const supabase = createClient(supabaseUrl, supabaseToken);
