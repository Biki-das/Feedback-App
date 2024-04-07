export const FilterActions = {
  All: () => true,
  UI: (feedback: { category: string }) => feedback.category === "UI",
  UX: (feedback: { category: string }) => feedback.category === "UX",
  Enhancement: (feedback: { category: string }) =>
    feedback.category === "Enhancement",
  Bug: (feedback: { category: string }) => feedback.category === "Bug",
  Feature: (feedback: { category: string }) => feedback.category === "Feature",
};

export const StatusFilter = {
  Planned: (statusList: { status: string }) => statusList.status === "Planned",
  InProgress: (statusList: { status: string }) =>
    statusList.status === "Inprogress",
  Live: (statusList: { status: string }) => statusList.status === "Live",
};
