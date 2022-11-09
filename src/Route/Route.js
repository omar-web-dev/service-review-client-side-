import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Details from "../pages/Home/Details";
import Blog from "../pages/Blog";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element : <Home/>
            },
            {
                path: 'home',
                loader : () => fetch(`http://localhost:5000/services`),
                element : <Home/>
            },
            {
                path: 'login',
                element : <Login/>
            },
            {
                path: 'registration',
                element : <Registration/>
            },
            {
                path: 'details',
                element : <Details/>
            },
            {
                path: 'blog',
                element : <Blog/>
            },
        ]
    }
])