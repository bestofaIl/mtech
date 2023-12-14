import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ContentProvider from "app/providers/ContentProvider/ui/ContentProvider";
import App from "./app/App";

render(
    <BrowserRouter>
        <ContentProvider>
            <App />
        </ContentProvider>
    </BrowserRouter>,
    document.getElementById("root"),
);
