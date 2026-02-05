import ItemCategoryMaintainPage from "./maintain";
import ItemCategoryModel from "@/models/itemCategory";

export default function ItemCategory() {
  const initialData: ItemCategoryModel = {
    itemCategoryId: "",
    code: "",
    categoryGroup: "",
    name: "",
    description: "",
    status: "",
    parent: "",
    parentCode: "",
  };

  return <ItemCategoryMaintainPage data={initialData} />;
}
