import APIResponse from "@/models/responseBase";
import UnitOfMeasureModel from "@/models/unitofmeasure";
import axios from "axios";
import { useRouter } from 'next/router'

const baseUrl: string = "http://localhost:5233";

export async function CreateUOM(uom: UnitOfMeasureModel): Promise<APIResponse<UnitOfMeasureModel>> {

    let resp: APIResponse<UnitOfMeasureModel> = {
        isError: false, message: "", payload: {
            allowDecimal: false,
            status: "",
            symbol: "",
            unitCode: "",
            uomCategory: "",
            uomDescription: "",
            uomId: "",
            uomName: "",
            uomType: ""
        }
    };

    await axios.post(baseUrl + "/api/InvUnitOfMeasure", uom, {
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    }).then((response) => {
        resp = JSON.parse(response.data);
    }).finally(() => { return resp; }
    );

    return resp;
}

export async function LookupUOM(): Promise<UnitOfMeasureModel[]> {

    let resp: UnitOfMeasureModel[] = [];

    await axios.get<UnitOfMeasureModel[]>(baseUrl + "/api/InvUnitOfMeasure", {
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    }).then((response) => {
        resp = response.data;
    }).finally(() => { return resp; });

    return resp;
}

export async function GetUom(uomId: string): Promise<UnitOfMeasureModel> {
    let uomData: UnitOfMeasureModel = {
        allowDecimal: false,
        status: "",
        symbol: "",
        unitCode: "",
        uomCategory: "",
        uomDescription: "",
        uomId: "",
        uomName: "",
        uomType: ""
    };

    await axios.get<APIResponse<UnitOfMeasureModel>>(baseUrl + "/api/InvUnitOfMeasure/" + uomId, {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    }).then((response) => {
        uomData = response.data.payload;
    }).finally(() => { return uomData });

    return uomData;
}

export async function UpdateUom(uom: UnitOfMeasureModel): Promise<APIResponse<UnitOfMeasureModel>> {

    let resp: APIResponse<UnitOfMeasureModel> = {
        isError: false, message: "", payload: {
            allowDecimal: false,
            status: "",
            symbol: "",
            unitCode: "",
            uomCategory: "",
            uomDescription: "",
            uomId: "",
            uomName: "",
            uomType: ""
        }
    };

    await axios.put(baseUrl + "/api/InvUnitOfMeasure", uom, {
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    })
        .then((response) => {
            resp = response.data.payload;
        }).finally(() => { return resp });

    return resp;
}