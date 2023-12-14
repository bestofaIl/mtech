import React from "react";
import TableHeader from "shared/ui/Table/TableHeader/TableHeader";
import TableBody from "shared/ui/Table/TableBody/TableBody";
import cls from "./Table.module.scss";

export interface columnObject {
    name: string;
    path: string;
    isUnderline?:boolean;
}
export interface columnRecord {
    [key: string]: columnObject
}

interface TableProps {
    columns: columnRecord;
    data: Array<object>;
}

const Table = ({
    columns, data,
}: TableProps) => (
    <table className={cls.table}>
        <TableHeader columns={columns} />
        <TableBody data={data} columns={columns} />
    </table>
);

export default Table;
