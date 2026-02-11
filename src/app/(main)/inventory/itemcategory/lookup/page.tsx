import { LookupItemCategory } from "@/services/itemcategoryservice";
import LookupPopup from "./lookuppopup";

export default async function ItemCategoryLookupPage() {
  // This runs on the server. No "uncached promise" error!
  const itemCategoryData = await LookupItemCategory();

  return (
    <div className="p-4">
      <h1>Item Category Lookup</h1>
      <hr />
      <LookupPopup data={itemCategoryData} />
    </div>
  );
}