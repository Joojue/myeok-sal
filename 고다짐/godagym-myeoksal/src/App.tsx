import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import List from "./pages/List";
import Detail from "./pages/Detail";
import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";
import Login from "./pages/Login";
import Team from "./pages/Team";

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
        { path: "team", element: <Team /> },
        {
          path: "list",
          element: <List />,
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
