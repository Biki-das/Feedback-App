export const SORT_OPTIONS = "SORT_OPTIONS";

export const updateOptions = (options: string) => ({
  type: SORT_OPTIONS,
  payload: options,
});
