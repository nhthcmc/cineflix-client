import { lazy, Suspense } from "react";
import Loading from "@components/loading/Loading";
import BackHome from "./BackHome";

export const lazyFn = (importFunc: any, access: boolean = true) => {
    if (!access) {
        return <BackHome />
    }
    const LazyComponent = lazy(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(importFunc());
            }, 1000);
        });
    });
    //const LazyComponent = lazy(importFunc);
    return <Suspense fallback={<Loading />}>
        <LazyComponent />
    </Suspense>;
};