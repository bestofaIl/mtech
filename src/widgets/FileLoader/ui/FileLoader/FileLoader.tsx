import ErrorBlock, { ThemeDiv } from "shared/ui/ErrorBlock/ErrorBlock";
import { classNames } from "shared/lib/classNames/classNames";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { useContent } from "app/providers/ContentProvider/lib/useContent";
import { LOCAL_STORAGE_CONTENT_KEY, columnRecord } from "app/providers/ContentProvider/lib/ContentContext";
import cls from "./FileLoader.module.scss";

const FileLoader = () => {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { content, setContent } = useContent();
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

        reader.onload = function () {
            const decoder = new TextDecoder("windows-1251");
            const str = decoder.decode(reader.result as ArrayBuffer);
            const csvData = d3.csvParse(str) as unknown;
            setContent(csvData as columnRecord);
            navigate("/about");
        };

        reader.onerror = function () {
            console.log(reader.error);
        };
    };
    return (
        <>
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
        </>
    );
};

export default FileLoader;
