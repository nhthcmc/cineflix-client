import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazyFn } from "./lazy";

export default function RouteConfig() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={lazyFn(() => import('../pages/home/Home'))} />
                <Route path="/authen" element={lazyFn(() => import('../pages/authen/Authen'), localStorage.getItem('token') == null ? true : false)} />
                <Route path="/admin" element={lazyFn(() => import('../pages/admin/Admin'))} />
                {/* <Route path="/account" element={lazyFn(() => import('../pages/account/Account'), !localStorage.getItem("token") ? false : true)}/> */}
            </Routes>
        </BrowserRouter>
    )
}
