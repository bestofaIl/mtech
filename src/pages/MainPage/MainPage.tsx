import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { classNames } from "shared/lib/classNames/classNames";
import { LOCAL_STORAGE_CONTENT_KEY } from "shared/constants/constants";
import { useNavigate } from "react-router-dom";
import ErrorBlock, { ThemeDiv } from "shared/ui/ErrorBlock/ErrorBlock";
import Button, { ThemeButton } from "../../shared/ui/Button/Button";
import cls from "./MainPage.module.scss";

function MainPage() {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [content, setContent] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_CONTENT_KEY)) || null);
    const [error, setError] = useState(false);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_CONTENT_KEY, JSON.stringify(content));
        if (JSON.parse(localStorage.getItem(LOCAL_STORAGE_CONTENT_KEY)) !== null) {
            navigate("/about");
        }
    }, [content]);

    const handleClick = () => {
        inputRef.current?.click();
    };
    const handleChange = (e: any) => {
        const file = e.target.files[0];
        if (!file.type.includes("/csv")) {
            setError(true);
            return;
        }

        const reader = new FileReader();

        reader.readAsArrayBuffer(file);
        // reader.readAsText(file, "Windows-1251");

        reader.onload = function () {
            const decoder = new TextDecoder("windows-1251");
            const str = decoder.decode(reader.result as ArrayBuffer);
            const csvData = d3.csvParse(str);
            setContent(csvData);
            navigate("/about");
        };

        reader.onerror = function () {
            console.log(reader.error);
        };
    };

    return (
        <div className={cls.container}>
            <ErrorBlock
                theme={ThemeDiv.ERROR}
                className={classNames(cls.errorBlock, { [cls.none]: !error }, [])}
            >
                Неправильный формат файла, разрешены только файлы .CSV
            </ErrorBlock>
            <div className={cls.mainContent}>
                <div className={cls.textContent}>Выберите файл в формате CSV</div>
                <Button
                    theme={ThemeButton.CLEAR}
                    className={classNames("", {}, [cls.button])}
                    onClick={handleClick}
                >
                    Выберите файл
                    <input
                        id="file"
                        type="file"
                        className={cls.fileInput}
                        ref={inputRef}
                        onChange={(e) => handleChange(e)}
                    />
                </Button>
            </div>
        </div>
    );
}

export default MainPage;
