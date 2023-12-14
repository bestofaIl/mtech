import ContentTable from "widgets/ContentTable/ContentTable";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClearButton } from "features/ClearButton";
import { LOCAL_STORAGE_CONTENT_KEY } from "app/providers/ContentProvider/lib/ContentContext";
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

    return data ? (
        <div className={cls.container}>
            <ClearButton />
            <ContentTable content={data} />
        </div>
    ) : "Loading...";
}

export default AboutPage;
