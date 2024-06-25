import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import List from "./pages/List";
import Pyo from "./pages/Pyo";
import Detail from "./pages/Detail";
import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "list",
          element: <List />,
        },
        {
          path: "pyo",
          element: <Pyo />,
        },
        {
          path: "/:id",
          element: <Detail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

const Root = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};
