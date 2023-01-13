import { createBrowserRouter } from "react-router-dom";
import GalleryPage from "../pages/GalleryPage";
import FrontPage from "../pages/FrontPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";

const router = createBrowserRouter([
  { path: "/", element: <FrontPage /> },
  { path: "/gallery", element: <GalleryPage /> },
  { path: "/shopping-cart", element: <ShoppingCartPage /> },
]);

export default router;
