'use client'

import UnitOfMeasureModel from '@/models/unitofmeasure';
import { FormEvent } from 'react';
import { CreateUOM } from "@/services/unitofmeasureservice"
import { useRouter } from 'next/navigation';
import UomMaintainPage from './maintain';

export default function UnitOfMeasure() {
    const router = useRouter();
    
    const initialData: UnitOfMeasureModel = {
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

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget);

        const uomCreate: UnitOfMeasureModel = {
            allowDecimal: false,
            status: formData.get("Status")?.toString() ?? "",
            symbol: formData.get("Symbol")?.toString() ?? "",
            unitCode: formData.get("UnitCode")?.toString() ?? "",
            uomCategory: formData.get("UomCategory")?.toString() ?? "",
            uomDescription: formData.get("UomDescription")?.toString() ?? "",
            uomId: "",
            uomName: formData.get("UomName")?.toString() ?? "",
            uomType: formData.get("UomType")?.toString() ?? "",
        };

        try {
            const response = await CreateUOM(uomCreate);
            // Handle success - could add toast notification or redirect
            console.error("UOM created successfully:", response);
        } catch (error) {
            console.error("Failed to create UOM:", error);
            // Handle error - could show error message to user
        }
    }

    return (
        <UomMaintainPage data={initialData} />
    );
}