import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Contact from './Components/Contact';
import Home from './Pages/Home/Home';
import BlogDetails from './Pages/Blog/BlogDetails';
import Service from './Pages/Service/Service';
import ServiceDetails from './Pages/Service/ServiceDetails';
import About from './Pages/About/About';
import Career from './Pages/Career/Career';
import JobDetails from './Pages/Career/JobDetails';
import Privacy from './Pages/Privacy Policy/Privacy';
import TermsCondition from './Pages/Terms and Conditions/TermsCondition';
import AllBlog from './Pages/Blog/AllBlog';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddBlog from './Pages/Dashboard/AddBlog';
import ManageBlogs from './Pages/Dashboard/ManageBlogs';
import DashboardBlogDetails from './Pages/Dashboard/DashboardBlogDetails';
import SecurityCheck from './Pages/Security/SecurityCheck';
import ProtectedRoute from './ProtectedRoute';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>
            },

            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: '/blog/:blogLink',
                element: <BlogDetails />
            },
            {
                path: '/services',
                element: <Service />
            },
            {
                path: '/blog',
                element: <AllBlog/>
            },
            {
                path: '/privacy-policy',
                element: <Privacy></Privacy>
            },
            {
                path: '/terms-and-conditions',
                element: <TermsCondition></TermsCondition>
            },
            {
                path: '/service/:title',
                element: <ServiceDetails />
            },
            {
                path: '/career',
                element: <Career />
            },
            {
                path: '/career/:title',
                element: <JobDetails />
            }
        ]
    },
    {
        path: "/security-check",
        element: <SecurityCheck />
    },
    {
        path: "/dashboard",
        element: <ProtectedRoute element={<Dashboard />} />,
        children: [
            {
                path: "addBlog",
                element: <AddBlog></AddBlog>
            },
            {
                path: "manageBlogs",
                element: <ManageBlogs></ManageBlogs>
            },
            // {
            //     path: '/dashboard/:blogLink',
            //     element: <DashboardBlogDetails></DashboardBlogDetails>
            // },
        ]
    }
])