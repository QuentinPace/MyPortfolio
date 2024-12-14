import { createBrowserRouter } from 'react-router-dom';
import Home from "../components/Home/Home.tsx"
import TestComp from '../components/TestComp/TestComp.tsx';
import Navigation from '../components/Navigation/Navigation.tsx';

export const router = createBrowserRouter([

    {
        element: <Navigation />,
        children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/test",
            element: <TestComp />
        }]
    }
])
