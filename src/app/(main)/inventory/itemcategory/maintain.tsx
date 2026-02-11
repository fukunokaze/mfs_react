"use client";
import { FormEvent, useEffect } from "react";
import ItemCategoryModel from "@/models/itemCategory";
import TextBoxField from "@/components/textboxtfield";
import TextAreaField from "@/components/textareafield";
import DropDownField from "@/components/dropdownfield";
import { ItemCategoryStatus } from "@/enums/itemcategorystatus";
import { useState } from "react";
import Link from "next/link";

declare global {
  interface Window {
    receiveItemCategoryData?: (itemCategory: ItemCategoryModel) => void;
  }
}

export default function ItemCategoryMaintainPage(props: {
  data: ItemCategoryModel;
}) {
  const [formData, setFormData] = useState<ItemCategoryModel>(props.data);
  const [selectedItemCategory, setSelectedItemCategory] =
    useState<ItemCategoryModel | null>(null);


  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    let initialData: ItemCategoryModel = {
      itemCategoryId: "",
      code: formData.get("ItemCategoryCode")?.toString() ?? "",
      name: formData.get("ItemCategoryName")?.toString() ?? "",
      description: formData.get("ItemCategoryDescription")?.toString() ?? "",
      status: formData.get("ItemCategoryStatus")?.toString() ?? "",
      parent: formData.get("parentId")?.toString() ?? "",
      parentCode: formData.get("ParentCode")?.toString() ?? "",
      categoryGroup: "",
    };
  }

  // 1. Setup the "Callback" Listener
  useEffect(() => {
    // We attach the function to the window so the child can find it
    window.receiveItemCategoryData = (itemCategory: ItemCategoryModel) => {
      setSelectedItemCategory(itemCategory);
    };

    // Cleanup: Remove the function when this component unmounts
    return () => {
      delete window.receiveItemCategoryData;
    };
  }, []);

  const openLookupWindow = () => {
    // 2. Open the popup
    // 'width=600,height=600' forces it to open as a pop-out, not a new tab
    const popup = window.open(
      "itemcategory/lookup", // This must match a real route in your app
      "ItemCategoryLookup",
      "width=600,height=500,left=200,top=200",
    );

    if (!popup) {
      alert("Please allow popups for this website");
    }
  };


  return (
    <div>
      <div className="mx-auto mt-5" style={{ maxWidth: "28rem" }}>
        <form onSubmit={onSubmit}>
          <TextBoxField
            label="Code"
            elementId="ItemCategoryCode"
            elementName="ItemCategoryCode"
            placeholder="Code"
            defaultValue={props.data.code}
          />
          <TextBoxField
            label="Name"
            elementId="ItemCategoryName"
            elementName="ItemCategoryName"
            placeholder="Name"
            defaultValue={props.data.name}
          />
          <TextAreaField
            label="Description"
            name="ItemCategoryDescription"
            elementId="ItemCategoryDescription"
            elementName="ItemCategoryDescription"
            placeholder="Description"
            defaultValue={props.data.description}
            rows={4}
          />
          <DropDownField
            label="Status"
            elementId="ItemCategoryStatus"
            elementName="ItemCategoryStatus"
            defaultValue={props.data.status}
            values={[
              { value: ItemCategoryStatus.Active, text: "Active" },
              { value: ItemCategoryStatus.Inactive, text: "Inactive" },
            ]}
          />
          <TextBoxField
            label="Parent"
            elementId="ParentCode"
            elementName="ParentCode"
            placeholder="Parent Category Code"
            disabled={true}
            defaultValue={props.data.parentCode}
            value={selectedItemCategory?.code ?? ""}
            loookupEvent={openLookupWindow}
          />
          {/* <Link
            href="#"
            onClick={openLookupWindow}
          >
            Lookup
          </Link> */}
          <TextBoxField
            label="Parent"
            elementId="parentId"
            elementName="parentId"
            hidden={true}
            defaultValue={props.data.parent}
            value={selectedItemCategory?.code ?? ""}
          />

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
