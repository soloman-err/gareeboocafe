import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Cart from './components/Cart/Cart'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import RootLayout from './components/RootLayout/RootLayout'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async () => {
          const res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
          return await res.json();
        }
      },
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'about',
        element: <About></About>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
