import { useRoutes } from "react-router-dom";
import HomePage from "./pages/Home";
import PostPage from "./pages/Post";

export function Routes() {
    return useRoutes([
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: '/:id',
            element: <PostPage />
        },
    ])
}