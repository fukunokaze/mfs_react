import { GetUom } from "@/services/unitofmeasureservice"
import UomMaintainPage from "../maintain";

interface UnitOfMeasureProps {
    params: Promise<{ slug: string }>;
}

export default async function UnitOfMeasure({ params }: UnitOfMeasureProps) {
    const parameter = await params;
    const uomData = await GetUom(parameter.slug);
    
    return <UomMaintainPage data={uomData} />;
}