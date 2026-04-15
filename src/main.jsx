import './index.css'
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { router } from './routes/Routes';
import { StrictMode } from 'react';
import FriendsProvider from './context/FriendsProvider';
import { ToastContainer } from 'react-toastify';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <FriendsProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </FriendsProvider>
  </StrictMode>
);