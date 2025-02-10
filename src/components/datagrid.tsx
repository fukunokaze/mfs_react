import React from "react";

export interface Column<T> {
    key: keyof T | string;
    header: string;
    render?: (row: T) => React.ReactNode;
}

interface DatagridProps<T> {
    data: T[];
    columns: Column<T>[],
};

function Datagrid<T>({ data, columns }: DatagridProps<T>) {
    console.log(data);
    return (
        <table className="w-full border-collapse">
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={String(col.key)} className="border p-2">
                            {col.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, idx) => (
                    <tr key={idx}>
                        {columns.map((col) => (
                            <td id={String(col.key)} key={String(col.key)} className="border p-2">
                                {col.render ? col.render(row) : (row as any)[col.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Datagrid;