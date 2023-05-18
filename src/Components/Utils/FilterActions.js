export const FilterActions = {
  All: () => true,
  UI: (feedback) => feedback.category === "UI",
  UX: (feedback) => feedback.category === "UX",
  Enhancement: (feedback) => feedback.category === "Enhancement",
  Bug: (feedback) => feedback.category === "Bug",
  Feature: (feedback) => feedback.category === "Feature",
};
