import APIResponse from "@/models/responseBase";
import UnitOfMeasureModel from "@/models/unitofmeasure";
import axios from "axios";
import { auth } from "@/lib/auth";
import { getServerSession } from "next-auth/next";

const baseUrl: string = "http://localhost:5233";

export async function CreateUOM(
  uom: UnitOfMeasureModel
): Promise<APIResponse<UnitOfMeasureModel>> {
  let resp: APIResponse<UnitOfMeasureModel> = {
    isError: false,
    message: "",
    payload: {
      allowDecimal: false,
      status: "",
      symbol: "",
      unitCode: "",
      uomCategory: "",
      uomDescription: "",
      uomId: "",
      uomName: "",
      uomType: "",
    },
  };

  await axios
    .post(baseUrl + "/api/InvUnitOfMeasure", uom, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => {
      console.log("log :" + response);
      resp = response.data;
    })
    .finally(() => {
      return resp;
    });

  return resp;
}

export async function LookupUOM(): Promise<UnitOfMeasureModel[]> {

  const session = await getServerSession(auth);

  let resp: UnitOfMeasureModel[] = [];
  console.log(JSON.stringify(session, null, 2));
  await axios
    .get<UnitOfMeasureModel[]>(baseUrl + "/api/InvUnitOfMeasure", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + session?.user.access_token,
      },
    })
    .then((response) => {
      resp = response.data;
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    })
    .finally(() => {
      return resp;
    });

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
    uomType: "",
  };

  await axios
    .get<APIResponse<UnitOfMeasureModel>>(
      baseUrl + "/api/InvUnitOfMeasure/" + uomId,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((response) => {
      uomData = response.data.payload;
    })
    .finally(() => {
      return uomData;
    });

  return uomData;
}

export async function UpdateUom(
  uom: UnitOfMeasureModel
): Promise<APIResponse<UnitOfMeasureModel>> {
  let resp: APIResponse<UnitOfMeasureModel> = {
    isError: false,
    message: "",
    payload: {
      allowDecimal: false,
      status: "",
      symbol: "",
      unitCode: "",
      uomCategory: "",
      uomDescription: "",
      uomId: "",
      uomName: "",
      uomType: "",
    },
  };

  await axios
    .put(baseUrl + "/api/InvUnitOfMeasure", uom, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => {
      resp = response.data.payload;
    })
    .finally(() => {
      return resp;
    });

  return resp;
}
