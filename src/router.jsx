import { createBrowserRouter } from "react-router";
import Layout from "./../src/components/layout/layout.jsx";
import News from "./components/sections/news";
import About from "./components/sections/about";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: < News />,
            },
            {
                path: "/about",
                element: <About />,
            }

        ]
    }
])