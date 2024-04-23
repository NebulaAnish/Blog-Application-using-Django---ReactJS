import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import ErrorPage from './sections/error-page'
import { Root, Login, Register, Blog, BlogCreate, BlogUpdate, BlogDetails } from "./sections";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Root />} errorElement={<ErrorPage />} />
            <Route path="/auth/login" element={< Login />} errorElement={< ErrorPage />} />
            <Route path="/auth/register" element={< Register />} errorElement={< ErrorPage />} />
            <Route path="/blog" element={< Blog />} errorElement={< ErrorPage />} />
            <Route path="/blog/create" element={< BlogCreate />} errorElement={< ErrorPage />} />
            <Route path="/blog/:id/edit" element={< BlogUpdate />} errorElement={< ErrorPage />} />
            <Route path="/blog/:id/details" element={< BlogDetails />} errorElement={< ErrorPage />} />
            <Route path="/error" element={< ErrorPage />} />
            <Route path="*" element={< ErrorPage />} />
        </>
    ));

export default router;