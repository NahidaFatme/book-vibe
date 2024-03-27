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
import Details from './Components/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: '/Book/:bookId',
        element: <Details></Details>,
        loader : () => fetch('/books.json'),
      },
      {
        path: '/Details.jsx',
        element: <Details></Details>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
