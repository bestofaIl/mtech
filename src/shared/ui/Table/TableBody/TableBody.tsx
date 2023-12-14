import React from "react";
import _ from "lodash";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./TableBody.module.scss";
import { columnRecord } from "../Table";

interface TableBodyProps {
    data: Array<object>;
    columns: columnRecord;
}

const TableBody = ({ data, columns }: TableBodyProps) => (
    <tbody className={cls.tableBody}>
        {data.map((item) => (
            <tr className={cls.tableBody__tr} key={item.toString()}>
                {Object.keys(columns).map((column) => (
                    <td
                        key={column}
                        className={classNames(cls.tableBody__td, { [cls.underline]: columns[column].isUnderline })}
                    >
                        {_.get(item, columns[column].path)}
                    </td>
                ))}
            </tr>
        ))}
    </tbody>
);

export default TableBody;
