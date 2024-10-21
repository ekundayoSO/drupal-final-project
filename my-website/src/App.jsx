import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Root from "./routes/Root.jsx";
import Projects from "./routes/Projects.jsx";
import Blogs from "./routes/Blogs.jsx";
import Contact from "./routes/Contact.jsx";


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/projects", element: <Projects /> },
        { path: "/blogs", element: <Blogs /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
