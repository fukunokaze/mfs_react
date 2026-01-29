import APIResponse from "@/models/responseBase";
import UnitOfMeasureModel from "@/models/unitofmeasure";
import axios from "axios";

const baseUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL 
    ? `${process.env.NEXT_PUBLIC_API_BASE_URL}` 
    : "http://localhost:5233";

/**
 * Creates a new Unit of Measure
 * @param uom - Unit of measure data to create
 * @returns API response with created UOM
 */
export async function CreateUOM(uom: UnitOfMeasureModel): Promise<APIResponse<UnitOfMeasureModel>> {
    try {
        const response = await axios.post(`${baseUrl}/api/InvUnitOfMeasure`, uom);
        return JSON.parse(response.data);
    } catch (error) {
        console.error("Failed to create UOM:", error);
        return {
            isError: true,
            message: error instanceof Error ? error.message : "Failed to create UOM",
            payload: {
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
    }
}

/**
 * Retrieves all Unit of Measures
 * @returns Array of UOM objects
 */
export async function LookupUOM(): Promise<UnitOfMeasureModel[]> {
    try {
        const response = await axios.get<UnitOfMeasureModel[]>(`${baseUrl}/api/InvUnitOfMeasure`);
        return response.data;
    } catch (error) {
        console.error("Failed to lookup UOM:", error);
        return [];
    }
}

/**
 * Retrieves a specific Unit of Measure by ID
 * @param uomId - ID of the UOM to retrieve
 * @returns UOM data
 */
export async function GetUom(uomId: string): Promise<UnitOfMeasureModel> {
    const defaultUomData: UnitOfMeasureModel = {
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

    try {
        const response = await axios.get<APIResponse<UnitOfMeasureModel>>(
            `${baseUrl}/api/InvUnitOfMeasure/${uomId}`
        );
        return response.data.payload;
    } catch (error) {
        console.error("Failed to get UOM:", error);
        return defaultUomData;
    }
}

/**
 * Updates an existing Unit of Measure
 * @param uom - Updated UOM data
 * @returns API response with updated UOM
 */
export async function UpdateUom(uom: UnitOfMeasureModel): Promise<APIResponse<UnitOfMeasureModel>> {
    try {
        const response = await axios.put(`${baseUrl}/api/InvUnitOfMeasure`, uom);
        return response.data;
    } catch (error) {
        console.error("Failed to update UOM:", error);
        return {
            isError: true,
            message: error instanceof Error ? error.message : "Failed to update UOM",
            payload: {
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
    }
}