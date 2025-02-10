
import Datagrid, { Column } from "@/components/datagrid";
import { LookupUOM } from "@/services/unitofmeasureservice";
import UnitOfMeasureModel from "@/models/unitofmeasure";
import Link from "next/link";

export default async function UOMLookup() {

    const columns: Column<UnitOfMeasureModel>[] = [
        { key: "unitCode", header: "Unit Code" , render : (data) =>{
            return(
                <Link href={"http://localhost:3000/inventory/unitofmeasure/" + "" + data.uomId}>{data.uomName}</Link>
            )
        }},
        { key: "uomCategory", header: "Category" },
        { key: "uomName", header: "Name" },
    ];

    const uomData: UnitOfMeasureModel[] = await LookupUOM();

    return (
        <div>
            <Datagrid data={uomData} columns={columns}></Datagrid>
        </div>
    );
}