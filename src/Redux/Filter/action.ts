export const FILTER_OPTIONS = "FILTER_OPTIONS";

export const updateFilter = (filter: string) => ({
  type: FILTER_OPTIONS,
  payload: filter,
});
