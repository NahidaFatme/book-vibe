import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home.jsx';
import Root from './Root.jsx';
import ListedBooks from './Components/ListedBooks.jsx';
import PagesRead from './Components/PagesRead.jsx';
import Details from './Components/Details.jsx';
import Contact from './Components/Contact.jsx';
import Reviews from './Components/Reviews.jsx';
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ListedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/PagesRead",
        element: <PagesRead></PagesRead>,
      },
      {
        path: '/Book/:bookId',
        element: <Details></Details>,
        loader : () => fetch('/books.json'),
      },
      {
        path: '/Contact',
        element: <Contact></Contact>,
      },
      {
        path: '/Reviews',
        element: <Reviews></Reviews>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
