"use client";

import Datagrid, { Column } from "@/components/datagrid";
import Link from "next/link";
import ItemCategoryModel from "@/models/itemCategory";

interface Props {
  data: ItemCategoryModel[];
}

export default function LookupPopup({ data }: Props) {
  const handleSelect = (itemCategory: ItemCategoryModel) => {

    if (typeof window !== "undefined" && window.opener) {
      window.opener.receiveItemCategoryData(itemCategory);
      window.close();
    }
  };

  const columns: Column<ItemCategoryModel>[] = [
    {
      key: "code",
      header: "Code",
      render: (item) => (
        <Link
          onClick={(e) => {
            e.preventDefault();
            handleSelect(item);
          }}
          href={"#"}
          className="text-decoration-none"
        >
          {item.code}
        </Link>
      ),
    },
    { key: "description", header: "Description" },
    { key: "name", header: "Name" },
  ];

  return <Datagrid data={data} columns={columns} />;
}
