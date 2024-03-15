import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BlockNumber from "./pages/BlockNumber/BlockNumber.jsx";
import Layout from "./Layout/Layout.jsx";
import USDT from "./pages/USDT-balance/USDT.jsx";
import { action as USDTBalance } from "./pages/USDT-balance/USDT.jsx";
import { loader as lastBlock } from "./pages/BlockNumber/BlockNumber.jsx";
import Error from "./pages/Error.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Layout />,
    children: [
      { index: true, element: <BlockNumber />, loader: lastBlock },
      { path: "USDT", element: <USDT />, action: USDTBalance },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
