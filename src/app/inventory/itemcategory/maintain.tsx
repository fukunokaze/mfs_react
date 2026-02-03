"use client";
import { CreateUOM, UpdateUom } from "@/services/unitofmeasureservice";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import UnitOfMeasureModel from "@/models/unitofmeasure";

export default function UomMaintainPage(props: { data: UnitOfMeasureModel }) {
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    let initialData: UnitOfMeasureModel = {
      uomId: formData.get("UomId")?.toString() ?? "",
      unitCode: formData.get("UnitCode")?.toString() ?? "",
      uomName: formData.get("UomName")?.toString() ?? "",
      symbol: formData.get("Symbol")?.toString() ?? "",
      uomDescription: formData.get("UomDescription")?.toString() ?? "",
      status: formData.get("Status")?.toString() ?? "",
      uomType: formData.get("UomType")?.toString() ?? "",
      uomCategory: formData.get("UomCategory")?.toString() ?? "",
      allowDecimal:
        formData.get("AllowDecimal")?.toString() == "on" ? true : false,
    };

    if (initialData.uomId == "") {
      let response = await CreateUOM(initialData);
      if (!response.isError)
        router.push("/inventory/unitofmeasure/" + response.payload.uomId);
    } else {
      await UpdateUom(initialData);
      router.refresh();
    }
  }

  return (
    <div>
      <div className="mx-auto mt-5" style={{ maxWidth: '28rem' }}>
        <form onSubmit={onSubmit}>
          <div className="mb-3 row align-items-center">
            <label className="col-4 text-end pe-3" htmlFor="UnitCode">
              Unit Code:
            </label>
            <div className="col-8">
              <input
                type="text"
                id="UomId"
                name="UomId"
                defaultValue={props.data.uomId}
                hidden
              />
              <input
                className="form-control"
                type="text"
                id="UnitCode"
                name="UnitCode"
                placeholder="Code"
                defaultValue={props.data.unitCode}
              />
            </div>
          </div>
          <div className="mb-3 row align-items-center">
            <label className="col-4 text-end pe-3" htmlFor="Name">
              Name:
            </label>
            <div className="col-8">
              <input
                className="form-control"
                type="text"
                id="UomName"
                name="UomName"
                placeholder="Unit Name"
                defaultValue={props.data.uomName}
              />
            </div>
          </div>
          <div className="mb-3 row align-items-center">
            <label className="col-4 text-end pe-3" htmlFor="Symbol">
              Symbol:
            </label>
            <div className="col-8">
              <input
                className="form-control"
                type="text"
                id="Symbol"
                name="Symbol"
                placeholder=""
                defaultValue={props.data.symbol}
              />
            </div>
          </div>
          <div className="mb-3 row align-items-center">
            <label className="col-4 text-end pe-3" htmlFor="UomDescription">
              Description:
            </label>
            <div className="col-8">
              <textarea
                className="form-control"
                id="UomDescription"
                name="UomDescription"
                rows={4}
                placeholder=""
                defaultValue={props.data.uomDescription}
              />
            </div>
          </div>
          <div className="mb-3 row align-items-center">
            <label className="col-4 text-end pe-3" htmlFor="Status">
              Status:
            </label>
            <div className="col-8">
              <select id="Status" name="Status" className="form-select" defaultValue={props.data.status}>
                <option value={"A"}>Active</option>
                <option value={"I"}>Inactive</option>
              </select>
            </div>
          </div>
          <div className="mb-3 row align-items-center">
            <label className="col-4 text-end pe-3" htmlFor="UomType">
              UOM Type:
            </label>
            <div className="col-8">
              <select
                id="UomType"
                name="UomType"
                className="form-select"
                defaultValue={props.data.uomType}
              >
                <option value={"I"}>Item Specific</option>
                <option value={"S"}>System Defined</option>
              </select>
            </div>
          </div>
          <div className="mb-3 row align-items-center">
            <label className="col-4 text-end pe-3" htmlFor="UomCategory">
              UOM Category:
            </label>
            <div className="col-8">
              <select
                id="UomCategory"
                name="UomCategory"
                className="form-select"
                defaultValue={props.data.uomCategory}
              >
                <option value={"W"}>Weight</option>
                <option value={"V"}>Volume</option>
                <option value={"Q"}>Quantity</option>
                <option value={"D"}>Duration</option>
              </select>
            </div>
          </div>
          <div className="mb-3 row align-items-center">
            <label className="col-4 text-end pe-3" htmlFor="AllowDecimal">
              Allow Decimal:
            </label>
            <div className="col-8">
              <input
                className="form-check-input"
                type="checkbox"
                id="AllowDecimal"
                name="AllowDecimal"
                placeholder=""
                defaultChecked={props.data.allowDecimal}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-12 text-end">
              <button
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
