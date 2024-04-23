import React from "react";
import ReactDOM from "react-dom/client";
import "./style/main.scss";
import { Provider } from "react-redux";
import store from "./store/index.js";
import "./firebase.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TodoLists from "./pages/TodoLists.jsx";
import Home from "./pages/Home.jsx";
import LogIn from "./pages/LogIn.jsx";
import SignUp from "./pages/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/todoLists",
        element: <TodoLists></TodoLists>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
