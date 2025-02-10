import APIResponse from "@/models/responseBase";
import UnitOfMeasureModel from "@/models/unitofmeasure";
import axios from "axios";

const baseUrl: string = "http://localhost:5233";

export async function CreateUOM(uom: UnitOfMeasureModel): Promise<APIResponse<UnitOfMeasureModel>> {

    let resp: APIResponse<UnitOfMeasureModel> = { IsError: false, Message: "" };

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