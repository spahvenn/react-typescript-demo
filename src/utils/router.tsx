import { createBrowserRouter } from "react-router-dom";
import GalleryPage from "../pages/GalleryPage";
import FrontPage from "../pages/FrontPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";

export const routes = [
  { path: "/", element: <FrontPage /> },
  { path: "/gallery", element: <GalleryPage /> },
  { path: "/shopping-cart", element: <ShoppingCartPage /> },
];

const router = createBrowserRouter(routes);

export default router;
