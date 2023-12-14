import Button, { ThemeButton } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import { useNavigate } from "react-router-dom";
import { useContent } from "app/providers/ContentProvider/lib/useContent";
import { LOCAL_STORAGE_CONTENT_KEY } from "app/providers/ContentProvider/lib/ContentContext";
import cls from "./ClearButton.module.scss";

const ClearButton = () => {
    const navigate = useNavigate();
    const { setContent } = useContent();
    const handleClear = () => {
        localStorage.setItem(LOCAL_STORAGE_CONTENT_KEY, null);
        setContent(null);
        navigate("/");
    };
    return (
        <Button
            onClick={handleClear}
            theme={ThemeButton.CLEAR}
            className={classNames(cls.Button, {}, [])}
        >
            Загрузить новый файл
        </Button>
    );
};

export default ClearButton;
