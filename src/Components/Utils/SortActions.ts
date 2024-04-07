interface Feedback {
  upvotes: any[]; // replace any with the correct type if known
  comments: any[]; // replace any with the correct type if known
}

interface SortActions {
  "Most Upvotes": (a: Feedback, b: Feedback) => number;
  "Least Upvotes": (a: Feedback, b: Feedback) => number;
  "Most Comments": (a: Feedback, b: Feedback) => number;
  "Least Comments": (a: Feedback, b: Feedback) => number;
}

export const actions: SortActions = {
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
