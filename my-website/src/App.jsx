import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Root from "./routes/Root.jsx";
// import About from "./routes/About.jsx";
// import Projects from "./routes/Projects.jsx";
// import Blogs from "./routes/Blogs.jsx";
// import Contact from "./routes/Contact.jsx";
import DruidProject from "./routes/DruidProject.jsx";
import BlogItem from "./routes/BlogItem.jsx";
import Services from "./routes/Services.jsx";
import ServicesReadMore from "./routes/ServicesReadMore.jsx";
import Careers from "./routes/Careers.jsx";
import WorkingWithUs from "./routes/WorkingWithUs.jsx";


function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { path: '/home', element: <Home /> },
        // { path: '/projects', element: <Projects /> },
        // { path: '/blogs', element: <Blogs /> },
        // { path: '/about', element: <About /> },
        // { path: '/contact', element: <Contact /> },
        { path: '/druid-projects', element: <DruidProject /> },
        { path: '/blog', element: <BlogItem /> },
        { path: '/services', element: <Services /> },
        { path: '/service-read-more', element: <ServicesReadMore /> },
        { path: '/careers', element: <Careers /> },
        { path: '/vacancies', element: <WorkingWithUs /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
