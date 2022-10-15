import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import FullComment from "./pages/FullComment/FullComment";
import NewComment from "./pages/NewComment/NewComment";

const routers = [
  { path: "/comment/:id", element: <FullComment/>},
  { path: "/new-comment", element: <NewComment/>},
  { path: "*", element: <NotFound /> },
  { path: "/", element: <HomePage /> },
];

export default routers;
