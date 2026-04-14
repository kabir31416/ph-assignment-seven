import './index.css'
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router/dom";
import { router } from './routes/Routes';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);