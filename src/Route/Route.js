import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Details from "../pages/Home/Details";
import Blog from "../pages/Blog";
import AllServices from "../pages/Home/Services/AllService";
import PrivetRoute from "./PrivetRoute";
import MyReview from "../pages/Review/MyReview";
import AddService from "../pages/Home/Services/AddService";
import Contact from "../pages/Contact";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                loader : () => fetch(`http://localhost:5000/services`),
                element : <Home/>
            },
            {
                path: 'home',
                loader : () => fetch(`http://localhost:5000/services`),
                element : <Home/>
            },
            {
                path: 'services',
                loader : () => fetch(`http://localhost:5000/all-services`),
                element : <AllServices/>
            },
            {
                path: 'my-review',
                // loader : () => fetch(`http://localhost:5000/all-services`),
                element : <PrivetRoute><MyReview/></PrivetRoute>
            },
            {
                path: 'add-service',
                element : <PrivetRoute><AddService/></PrivetRoute>
            },
            {
                path: 'service/:_id',
                // http://localhost:3000/details/636b1fe0ba91a2efff9d7eb4
                loader : ({params}) => fetch(`http://localhost:5000/service/${params._id}`),
                element : <Details/>
            },
            {
                path: 'login',
                element : <Login/>
            },
            {
                path: 'contact',
                element : <Contact/>
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