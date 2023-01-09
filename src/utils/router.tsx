import { createBrowserRouter } from "react-router-dom";
import GalleryPage from "../pages/GalleryPage/GalleryPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/gallery", element: <GalleryPage /> },
]);

export default router;
