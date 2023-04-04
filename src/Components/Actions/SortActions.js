export const actions = {
  "Most Upvotes": (a, b) => {
    const A = a.commentVotes;
    const B = b.commentVotes;
    return B - A;
  },
  "Least Upvotes": (a, b) => {
    const A = a.commentVotes;
    const B = b.commentVotes;
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
