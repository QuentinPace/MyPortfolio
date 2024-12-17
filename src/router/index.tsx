import { createBrowserRouter } from 'react-router-dom';
import Landing from "../components/Landing/Landing.tsx"
import TestComp from '../components/TestComp/TestComp.tsx';
import Navigation from '../components/Navigation/Navigation.tsx';
import ContactMe from '../components/ContactMe/ContactMe.tsx';

export const router = createBrowserRouter([

    {
        element: <Navigation />,
        children: [
        {
            path: "/",
            element: <Landing />
        },
        {
            path: "/test",
            element: <TestComp />
        },
        {
            path: "/contact",
            element: <ContactMe />
        }]
    }
])
