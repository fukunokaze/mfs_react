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
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={String(col.key)}>
                            {col.header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, idx) => (
                    <tr key={idx}>
                        {columns.map((col) => (
                            <td id={String(col.key)} key={String(col.key)}>
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