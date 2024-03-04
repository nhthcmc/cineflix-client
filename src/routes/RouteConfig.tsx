import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazyFn } from "./lazy";

export default function RouteConfig() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={lazyFn(() => import('../pages/home/Home'))} />
                <Route path="/authen" element={lazyFn(() => import('../pages/authen/Authen'))} />
                <Route path="/profile" element={lazyFn(() => import('../pages/profile/Profile'), !localStorage.getItem("token") ? false : true)}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
