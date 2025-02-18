import UnitOfMeasureModel from '@/models/unitofmeasure';
import React, { FormEvent } from 'react';
import { CreateUOM, GetUom, UpdateUom } from "@/services/unitofmeasureservice"
import UomMaintainPage from "../maintain";

interface BlogPostProps {
    params: { slug: string };
}
export default async function UnitOfMeasure({ params }: BlogPostProps) {
    let parameter = await params;
    let uomData = await GetUom(parameter.slug as string);
    
    return (
        <UomMaintainPage data={uomData}></UomMaintainPage>
    );
}