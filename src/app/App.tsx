import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage/AboutPage";
import MainPage from "../pages/MainPage/MainPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/" element={<MainPage />} />
            </Routes>
        </div>
    );
}

export default App;
