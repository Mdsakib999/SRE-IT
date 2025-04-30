import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import WriteDescription from "../../Components/WriteDescription";
import { FaSpinner } from "react-icons/fa";

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editBlog, setEditBlog] = useState({
    blogTitle: "",
    blogLink: "",
    description: "",
    blogImage: "",
    cardDescription: "",
  });
  const [value, setValue] = useState(editBlog.description); // state for handling WriteDescription component
  const [loading, setLoading] = useState(true); // state to track loading status

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://serverit.smitsolution.com.bd/blogs", { cache: "no-cache" });
        const data = await response.json();

        // Adjust according to the API response structure.
        const blogsArray = Array.isArray(data) ? data : data.blogs;
        setBlogs(blogsArray || []);
        setLoading(false);
        // console.log(blogsArray);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]); // fallback to empty array in case of error
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

// https://serverit.smitsolution.com.bd
// http://localhost:5000/blogs

    if (confirmDelete.isConfirmed) {
      try {
        const response = await fetch(`https://serverit.smitsolution.com.bd/blogs/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          setBlogs(blogs.filter((blog) => blog._id !== id));
          Swal.fire("Deleted!", "Your blog has been deleted.", "success");
        } else {
          Swal.fire("Error!", "Failed to delete the blog.", "error");
        }
      } catch (error) {
        console.error("Error deleting blog:", error);
        Swal.fire("Error!", "Something went wrong.", "error");
      }
    }
  };

  const handleEdit = (blog) => {
    setEditBlog(blog);
    setValue(blog.description); // Set the value of description for editing
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditBlog((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateBlog = async (e) => {
    e.preventDefault();
    try {
      const updatedBlog = { ...editBlog, description: value }; // Add the value from WriteDescription
      const response = await fetch(
        `https://serverit.smitsolution.com.bd/blogs/${updatedBlog._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedBlog),
        }
      );

      if (response.ok) {
        setBlogs(
          blogs?.map((blog) =>
            blog._id === updatedBlog._id ? { ...updatedBlog } : blog
          )
        );
        Swal.fire("Updated!", "Your blog has been updated.", "success");
        setIsModalOpen(false);
      } else {
        Swal.fire("Error!", "Failed to update the blog.", "error");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  return (
    <div className="px-10 py-10">
      <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
        Manage Blogs
      </h2>
      {loading ? (
        <p className="text-center text-xl font-semibold flex justify-center items-center gap-x-3"><FaSpinner className="animate-spin text-4xl text-orange-500" />Loading...</p>
      ) : blogs && blogs.length > 0 ? (
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div key={blog._id} className="group w-full border border-gray-300 rounded-xl max-w-sm ">
              <div>
                <img
                  src={blog.blogImage}
                  alt="blog"
                  className="max-h-[200px] rounded-t-xl w-full "
                />
              </div>
              <div className="p-4 transition-all duration-300 rounded-b-2xl bg-white group-hover:bg-gray-50 ">
                <div className="flex gap-x-3 mb-3">
                  <div>
                    <p>
                      <span className="text-orange-600 font-medium block">
                        {new Date(blog.createdAt).toLocaleString("en-US", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </span>
                    </p>
                  </div>
                </div>
                <Link
                  // to={`/dashboard/${blog.blogLink}`}
                  className="text-lg text-gray-900 font-semibold"
                >
                  {blog.blogTitle.slice(0, 65)}
                </Link>
                <div className="mt-4 flex justify-evenly">
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="bg-red-500 text-white px-3 py-1 font-bold rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEdit(blog)}
                    className="bg-blue-500 text-white px-3 py-1 font-bold rounded hover:bg-blue-600 mr-2"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl font-semibold">Refresh the page</p>
      )}

      {/* Modal for Editing */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[40%]">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Edit Blog
            </h2>
            <form onSubmit={updateBlog}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Blog Title
                </label>
                <input
                  type="text"
                  name="blogTitle"
                  value={editBlog.blogTitle}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Blog Link
                </label>
                <input
                  type="text"
                  name="blogLink"
                  value={editBlog.blogLink}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Blog Image URL
                </label>
                <input
                  type="text"
                  name="blogImage"
                  value={editBlog.blogImage}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Card Description
                </label>
                <textarea
                  name="cardDescription"
                  value={editBlog.cardDescription}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              {/* Replace Description textarea with WriteDescription component */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <WriteDescription setValue={setValue} value={value} />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageBlogs;
