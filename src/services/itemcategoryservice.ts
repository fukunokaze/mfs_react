import ItemCategoryModel from "@/models/itemCategory";
import axios from "axios";

const baseUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL 
    ? `${process.env.NEXT_PUBLIC_API_BASE_URL}` 
    : "http://localhost:5233";


    const dummyItemCategories: ItemCategoryModel[] = [
        {
            itemCategoryId: "1",
            code: "CAT1",
            categoryGroup: "Group1",
            name: "Category 1",
            description: "Description for Category 1",
            status: "Active",
            parent: "Parent1",
            parentCode: "PAR1"
        },
        {
            itemCategoryId: "2",
            code: "CAT2",
            categoryGroup: "Group2",
            name: "Category 2",
            description: "Description for Category 2",
            status: "Inactive",
            parent: "Parent2",
            parentCode: "PAR2"
        },
    ];

export async function LookupItemCategory(): Promise<ItemCategoryModel[]> {
  // Implementation for looking up item categories
  // This is a placeholder implementation; replace with actual data fetching logic
  try {
        // const response = await axios.get<ItemCategoryModel[]>(`${baseUrl}/api/InvUnitOfMeasure`);
        // return response.data;
        return dummyItemCategories;
    } catch (error) {
        console.error("Failed to lookup UOM:", error);
        return [];
    }
}
