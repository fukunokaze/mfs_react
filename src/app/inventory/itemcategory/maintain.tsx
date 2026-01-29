'use client'
import { CreateUOM, UpdateUom } from "@/services/unitofmeasureservice";
import React, { FormEvent } from "react";
import { useRouter } from 'next/navigation';
import ItemCategoryModel from "@/models/itemCategory";

export default function UomMaintainPage(props: { data: ItemCategoryModel }) {
    const router = useRouter();

    async function onSubmit(event: FormEvent<HTMLFormElement>) {

        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        let initialData: ItemCategoryModel = {
            itemCategoryId: formData.get("ItemCategoryId")?.toString() ?? "",
            itemCategoryCode: formData.get("ItemCategoryCode")?.toString() ?? "",
            categoryGroup: formData.get("CategoryGroup")?.toString() ?? "",
            itemCategoryName: formData.get("ItemCategoryName")?.toString() ?? "",
            itemCategoryDescription: formData.get("ItemCategoryDescription")?.toString() ?? "",
            status: formData.get("Status")?.toString() ?? "",
            itemCategoryaParent: formData.get("ItemCategoryaParent")?.toString() ?? "",
        };

        if (initialData.itemCategoryId == '') {
            let response = await CreateUOM(initialData);
            if (!response.isError) router.push('/inventory/unitofmeasure/' + response.payload.uomId);

        } else {
            await UpdateUom(initialData);
            router.refresh();
        }
    }

    return (
        <div>
            <div className="max-w-md mx-auto mt-10">
                <form onSubmit={onSubmit} className="space-y-6">
                    <div className="flex items-center">
                        <label className="w-1/3 text-right pr-4" htmlFor="UnitCode">
                            Unit Code:
                        </label>
                        <input type="text" id="UomId" name="UomId" defaultValue={props.data.uomId} hidden />
                        <input
                            className="w-2/3 border border-gray-300 p-2 rounded"
                            type="text"
                            id="UnitCode"
                            name="UnitCode"
                            placeholder="Code"
                            defaultValue={props.data.unitCode}
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="w-1/3 text-right pr-4" htmlFor="Name">
                            Name:
                        </label>
                        <input
                            className="w-2/3 border border-gray-300 p-2 rounded"
                            type="text"
                            id="UomName"
                            name="UomName"
                            placeholder="Unit Name"
                            defaultValue={props.data.uomName}
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="w-1/3 text-right pr-4" htmlFor="Symbol">
                            Symbol:
                        </label>
                        <input
                            className="w-2/3 border border-gray-300 p-2 rounded"
                            type="text"
                            id="Symbol"
                            name="Symbol"
                            placeholder=""
                            defaultValue={props.data.symbol}
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="w-1/3 text-right pr-4" htmlFor="UomDescription">
                            Description:
                        </label>
                        <textarea
                            className="w-2/3 border border-gray-300 p-2 rounded"
                            id="UomDescription"
                            name="UomDescription"
                            rows={4}
                            placeholder=""
                            defaultValue={props.data.uomDescription}
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="w-1/3 text-right pr-4" htmlFor="Status">
                            Status:
                        </label>
                        <select id='Status' name='Status' defaultValue={props.data.status}>
                            <option value={"A"}>Active</option>
                            <option value={"I"}>Inactive</option>
                        </select>
                    </div>
                    <div className="flex items-center">
                        <label className="w-1/3 text-right pr-4" htmlFor="UomType">
                            UOM Type:
                        </label>
                        <select id='UomType' name='UomType' defaultValue={props.data.uomType}>
                            <option value={"I"}>Item Specific</option>
                            <option value={"S"}>System Defined</option>
                        </select>
                    </div>
                    <div className="flex items-center">
                        <label className="w-1/3 text-right pr-4" htmlFor="UomCategory">
                            UOM Category:
                        </label>
                        <select id='UomCategory' name='UomCategory' defaultValue={props.data.uomCategory}>
                            <option value={"W"}>Weight</option>
                            <option value={"V"}>Volume</option>
                            <option value={"Q"}>Quantity</option>
                            <option value={"D"}>Duration</option>
                        </select>
                    </div>
                    <div className="flex items-center">
                        <label className="w-1/3 text-right pr-4" htmlFor="AllowDecimal">
                            Allow Decimal:
                        </label>
                        <input
                            className="w-0/3 border border-gray-300 p-2 rounded"
                            type="checkbox"
                            id="AllowDecimal"
                            name="AllowDecimal"
                            placeholder=""
                            defaultChecked={props.data.allowDecimal}
                        />
                    </div>
                    <div className="flex items-center justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}