export const ItemCategoryStatus = {
    Active: "A",
    Inactive: "I"
} as const;

export type ItemCategoryStatus = typeof ItemCategoryStatus[keyof typeof ItemCategoryStatus];