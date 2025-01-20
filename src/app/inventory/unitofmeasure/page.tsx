'use client'

import Label from '@/components/Label';
import React, { FormEvent } from 'react';



export default function UnitOfMeasure() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const response = await fetch('https://localhost:44341/api/InvUnitOfMeasure', {
            method: 'POST',
            body: formData,
        })

        // Handle response if necessary
        const data = await response.json()
        // ...
    }

    return (
        <div>
            <div className="max-w-md mx-auto mt-10">
                <form className="space-y-6">
                    <div className="flex items-center">
                        <label className="w-1/3 text-right pr-4" htmlFor="UnitCode">
                            Unit Code:
                        </label>
                        <input
                            className="w-2/3 border border-gray-300 p-2 rounded"
                            type="text"
                            id="UnitCode"
                            name="UnitCode"
                            placeholder="Code"
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="w-1/3 text-right pr-4" htmlFor="Name">
                            Name:
                        </label>
                        <input
                            className="w-2/3 border border-gray-300 p-2 rounded"
                            type="text"
                            id="Name"
                            name="Name"
                            placeholder="Unit Name"
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="w-1/3 text-right pr-4" htmlFor="Symbol">
                            Symbol:
                        </label>
                        <input
                            className="w-2/3 border border-gray-300 p-2 rounded"
                            type="text"
                            id="Symbol"
                            name="Symbol"
                            placeholder=""
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="w-1/3 text-right pr-4" htmlFor="Description">
                            Description:
                        </label>
                        <textarea
                            className="w-2/3 border border-gray-300 p-2 rounded"
                            id="Description"
                            name="Description"
                            rows={4}
                            placeholder=""
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="w-1/3 text-right pr-4" htmlFor="Status">
                            Status:
                        </label>
                        <select id='Status' name='Status'>
                            <option value={"A"}>Active</option>
                            <option value={"I"}>Inactive</option>
                        </select>
                    </div>
                    <div className="flex items-center">
                        <label className="w-1/3 text-right pr-4" htmlFor="UomCategory">
                            UOM Category:
                        </label>
                        <select id='UomCategory' name='UomCategory'>
                            <option value={"W"}>Weight</option>
                            <option value={"V"}>Volume</option>
                            <option value={"Q"}>Quantity</option>
                            <option value={"D"}>Duration</option>
                        </select>
                    </div>
                    <div className="flex items-center">
                        <label className="w-1/3 text-right pr-4" htmlFor="AllowDecimal">
                            Allow Decimal:
                        </label>
                        <input
                            className="w-0/3 border border-gray-300 p-2 rounded"
                            type="checkbox"
                            id="AllowDecimal"
                            name="AllowDecimal"
                            placeholder=""
                        />
                    </div>
                    <div className="flex items-center justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}