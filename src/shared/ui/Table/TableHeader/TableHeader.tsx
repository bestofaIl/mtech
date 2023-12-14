import React from "react";
import { columnRecord } from "shared/ui/Table/Table";
import cls from "./TableHeader.module.scss";

interface TableHeaderProps {
    columns: columnRecord;
}

const TableHeader = ({ columns }: TableHeaderProps) => (
    <thead className={cls.tableHead}>
        <tr>
            {Object.keys(columns).map((column) => (
                <th
                    className={cls.tableHead__th}
                    key={columns[column].name}
                >
                    {columns[column].name}
                </th>
            ))}
        </tr>
    </thead>
);

export default TableHeader;
