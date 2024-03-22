import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazyFn } from "./lazy";

export default function RouteConfig() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={lazyFn(() => import('../pages/home/Home'))} >
                    <Route path="films" element={lazyFn(() => import('../pages/home/components/browseFilm/BrowseFilm'))} />
                    <Route path="films/:id" element={lazyFn(() => import('../pages/home/components/watchFilm/WatchFilm'), localStorage.getItem('token') == null ? false : true)} />
                </Route>
                <Route path="/authen" element={lazyFn(() => import('../pages/authen/Authen'), localStorage.getItem('token') == null ? true : false)} />
                <Route path="/admin" element={lazyFn(() => import('../pages/admin/Admin'), localStorage.getItem('token') == null ? false : true)} >
                    <Route path="films" element={lazyFn(() => import('../pages/admin/film/FilmList'))}>
                        <Route path="update/:id" element={lazyFn(() => import('../pages/admin/film/UpdateForm'))} />
                        <Route path="upload" element={lazyFn(() => import('../pages/admin/film/Upload'))} />
                    </Route>
                </Route>
                <Route path="/account" element={lazyFn(() => import('../pages/account/Account'), localStorage.getItem('token') == null ? false : true)} />
            </Routes>
        </BrowserRouter>
    )
}
