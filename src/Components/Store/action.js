export const SORT_OPTION_UPDATED = "SORT_OPTION_UPDATED"

export const updateSortOption = (sortOption) => ({
    type: SORT_OPTION_UPDATED,
    payload: String(sortOption)
});
