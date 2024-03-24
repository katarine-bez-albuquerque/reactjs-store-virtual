import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import { HomeProviderContext } from "../contexts/constext";
import PageDefault from "../pages/page-default";

const MyRoute = () => (
    <HomeProviderContext>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageDefault />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/:id" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </HomeProviderContext>
);

export default MyRoute;