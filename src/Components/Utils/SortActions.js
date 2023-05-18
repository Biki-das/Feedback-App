import { supabase } from "../Supabase/Supabaseconfig";

export const actions = {
  "Most Upvotes": (a, b) => {
    const A = a.upvotes.length;
    const B = b.upvotes.length;
    return B - A;
  },
  "Least Upvotes": (a, b) => {
    const A = a.upvotes.length;
    const B = b.upvotes.length;
    return A - B;
  },
  "Most Comments": (a, b) => {
    const A = a.comments.length;
    const B = b.comments.length;
    return B - A;
  },
  "Least Comments": (a, b) => {
    const A = a.comments.length;
    const B = b.comments.length;
    return A - B;
  },
};
