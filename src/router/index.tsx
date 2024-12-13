import { createBrowserRouter } from 'react-router-dom';
import Home from "../components/Home/Home.tsx"
import TestComp from '../components/TestComp/TestComp.tsx';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/test",
        element: <TestComp />
    }
])
