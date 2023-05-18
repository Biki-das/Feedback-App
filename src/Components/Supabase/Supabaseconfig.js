import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://hbkjgvbfjuexknekrprh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhia2pndmJmanVleGtuZWtycHJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzODE5NTEsImV4cCI6MTk5ODk1Nzk1MX0.L5UqVKRZl9Z_o-ulkreJ8TGnWZ4HAMMbnYEis4CqdZI"
);
