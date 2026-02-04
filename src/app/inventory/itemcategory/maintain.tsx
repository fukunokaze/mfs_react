"use client";
import { CreateUOM, UpdateUom } from "@/services/unitofmeasureservice";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import ItemCategoryModel from "@/models/itemCategory";
import TextBoxField from "@/components/textboxtfield";
import TextAreaField from "@/components/textareafield";
import DropDownField from "@/components/dropdownfield";
import { ItemCategoryStatus } from "@/enums/itemcategorystatus";

export default function ItemCategoryMaintainPage(props: { data: ItemCategoryModel }) {
  const router = useRouter();

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
            defaultValue={props.data.parentCode}
          />
          <TextBoxField
            label="Parent"
            elementId="parentId"
            elementName="parentId"
            hidden={true}
            defaultValue={props.data.parent}
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
