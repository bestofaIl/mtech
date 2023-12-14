import { Route, Routes } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import AboutPage from "pages/AboutPage/AboutPage";
import MainPage from "pages/MainPage/MainPage";
import "./styles/index.scss";

function App() {
    return (
        <div className={classNames("app", {}, [])}>
            <Routes>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/" element={<MainPage />} />
            </Routes>
        </div>
    );
}

export default App;
