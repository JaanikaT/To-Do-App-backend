import { createBrowserRouter, 
    createRoutesFromElements,
    Route,
    RouterProvider,
    Navigate    
}   from "react-router-dom";

import {LoginLayout} from  "./layouts/LoginLayout";
import {RootLayout} from "./layouts/RootLayout";
import {Login} from "./pages/Login";
import {Dashboard} from "./pages/Dashboard";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<LoginLayout />}>
                <Route index element={<Login />} />
            </Route>
            
            <Route path="/dashboard" element={<RootLayout />}>
                <Route index element={<Dashboard />} />
            </Route>

        </>
    )
);

const AppRouter = () => {
    return <RouterProvider router={router} />
}

export default AppRouter;

