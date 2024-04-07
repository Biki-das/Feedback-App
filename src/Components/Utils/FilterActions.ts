interface FilterActions {
  All: () => boolean;
  UI: (feedback: any) => boolean;
  UX: (feedback: any) => boolean;
  Enhancement: (feedback: any) => boolean;
  Bug: (feedback: any) => boolean;
  Feature: (feedback: any) => boolean;
}

interface StatusFilter {
  Planned: (statusList: any) => boolean;
  InProgress: (statusList: any) => boolean;
  Live: (statusList: any) => boolean;
}

export const FilterActions: FilterActions = {
  All: () => true,
  UI: (feedback) => feedback.category === "UI",
  UX: (feedback) => feedback.category === "UX",
  Enhancement: (feedback) => feedback.category === "Enhancement",
  Bug: (feedback) => feedback.category === "Bug",
  Feature: (feedback) => feedback.category === "Feature",
};

export const StatusFilte: StatusFilter = {
  Planned: (statusList) => statusList.status === "Planned",
  InProgress: (statusList) => statusList.status === "Inprogress",
  Live: (statusList) => statusList.status === "Live",
};
