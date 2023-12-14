import Table from "shared/ui/Table/Table";

interface ContentTableProps {
    content: Array<object>;
}

const ContentTable = ({
    content,
}: ContentTableProps) => {
    const columns = {
        name: {
            name: "Имя",
            path: "name",
        },
        corporate: {
            name: "Номер телефона",
            path: "phone",
        },
        email: {
            name: "email",
            path: "email",
            isUnderline: true,
        },
        group: {
            name: "Дата рождения",
            path: "bday",
        },
        number: {
            name: "Адрес",
            path: "address",
        },
    };
    return (
        <Table
            columns={columns}
            data={content}
        />
    );
};

export default ContentTable;
