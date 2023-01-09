import { createBrowserRouter } from "react-router-dom";
import GalleryPage from "../pages/GalleryPage";
import FrontPage from "../pages/FrontPage";

const router = createBrowserRouter([
  { path: "/", element: <FrontPage /> },
  { path: "/gallery", element: <GalleryPage /> },
]);

export default router;
