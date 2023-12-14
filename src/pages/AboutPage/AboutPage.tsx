import ContentTable from "widgets/ContentTable/ContentTable";
import { useEffect, useState } from "react";
import { LOCAL_STORAGE_CONTENT_KEY } from "shared/constants/constants";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import { useNavigate } from "react-router-dom";
import cls from "./AboutPage.module.scss";

function AboutPage() {
    const navigate = useNavigate();
    const [data, setData] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_CONTENT_KEY)));

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem(LOCAL_STORAGE_CONTENT_KEY)));
        if (JSON.parse(localStorage.getItem(LOCAL_STORAGE_CONTENT_KEY)) === null) {
            navigate("/");
        }
    }, []);

    const handleClear = () => {
        localStorage.setItem(LOCAL_STORAGE_CONTENT_KEY, null);
        setData(null);
        navigate("/");
    };

    return data ? (
        <div className={cls.container}>
            <Button
                onClick={handleClear}
                theme={ThemeButton.CLEAR}
                className={classNames(cls.Button, {}, [])}
            >
                Загрузить новый файл
            </Button>
            <ContentTable content={data} />
        </div>
    ) : "Loading...";
}

export default AboutPage;
