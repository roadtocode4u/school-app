import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AddStudent from './views/AddStudent/AddStudent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/add-student',
    element: <AddStudent />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
