import {Suspense, lazy} from "react";
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";

const Main = lazy(() => import("../pages/Main"))
const Login = lazy(() => import("../pages/Login"))

const Routes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>load</div>}>
                <ReactRoutes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                </ReactRoutes>
            </Suspense>
        </BrowserRouter>)
}

export default Routes;
