'use client'

import UnitOfMeasureModel from '@/models/unitofmeasure';
import React, { FormEvent } from 'react';
import { CreateUOM } from "@/services/unitofmeasureservice"
import { useRouter } from 'next/navigation';
import UomMaintainPage from './maintain';

export default function UnitOfMeasure() {
    // const router = useRouter();
    let initialData: UnitOfMeasureModel = {
        uomId: '',
        unitCode: '',
        uomCategory: '',
        uomDescription: '',
        uomName: '',
        uomType: '',
        symbol: '',
        status: '',
        allowDecimal: false
    };

    // async function onSubmit(event: FormEvent<HTMLFormElement>) {
    //     event.preventDefault()
    //     const formData = new FormData(event.currentTarget);

    //     let uomCreate: UnitOfMeasureModel = {
    //         allowDecimal: false,
    //         status: formData.get("Status")?.toString() ?? "",
    //         symbol: formData.get("Symbol")?.toString() ?? "",
    //         unitCode: formData.get("UnitCode")?.toString() ?? "",
    //         uomCategory: formData.get("UomCategory")?.toString() ?? "",
    //         uomDescription: formData.get("UomDescription")?.toString() ?? "",
    //         uomId: "",
    //         uomName: formData.get("UomName")?.toString() ?? "",
    //         uomType: formData.get("UomType")?.toString() ?? "",
    //     };

    //     let response = await CreateUOM(uomCreate);

    // }

    return (
        <UomMaintainPage data={initialData}></UomMaintainPage>
    );
}