import React, { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowRight, FaTimes } from "react-icons/fa";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const adminRoutes = [
    { path: "/dashboard/addBlog", label: "Add New Blog" },
    { path: "/dashboard/manageBlogs", label: "Manage Blogs" },
    { path: "/blog", label: "Blogs" },
    { path: "/", label: "Home" },
  ];

  const isActive = (path) =>
    location.pathname === path ? "text-orange-500 font-semibold" : "";

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("isVerified"); // Remove verification status
    navigate("/security-check"); // Redirect to security check page
  };

  return (
    <div className="flex">
      {/* Sidebar Toggle Button (Mobile) */}
      {!isDashboardOpen && (
        <button
          onClick={() => setIsDashboardOpen(true)}
          className="lg:hidden fixed top-5 left-4 border px-2 py-2 rounded-full shadow-lg hover:bg-gray-800 hover:text-white transition-colors"
        >
          <FaArrowRight />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`w-[250px] lg:w-[400px] p-4 bg-gray-800 text-white fixed inset-y-0 left-0 z-1 transition-transform duration-300  ${
          isDashboardOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0`}
      >
        {/* Close Button (Mobile) */}
        {isDashboardOpen && (
          <button
            onClick={() => setIsDashboardOpen(false)}
            className="absolute top-5 left-48 lg:hidden text-red-600 hover:text-red-500"
          >
            <FaTimes size={24} />
          </button>
        )}

        <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Dashboard</h2>
        <ul className="space-y-4">
          {adminRoutes.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`hover:text-orange-500 ml-3 text-lg ${isActive(path)}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full bg-gray-100 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
