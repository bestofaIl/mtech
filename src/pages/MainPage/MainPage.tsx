import { FileLoader } from "widgets/FileLoader";
import cls from "./MainPage.module.scss";

function MainPage() {
    return (
        <div className={cls.container}>
            <FileLoader />
        </div>
    );
}

export default MainPage;
