import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";


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
                element : <Home/>
            },
            {
                path: 'login',
                element : <Login/>
            },
            {
                path: 'registration',
                element : <Registration/>
            }
        ]
    }
])