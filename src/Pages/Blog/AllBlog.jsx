import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegDotCircle, FaSpinner } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const AllBlog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  // https://serverit.smitsolution.com.bd
  // http://localhost:5000/blogs

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://serverit.smitsolution.com.bd/blogs");
        const data = await response.json();
        setBlogs(data.reverse()); // reverse to show latest first
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Calculate the blogs to show on the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mt-24">
      <div>
        <h2 className="md:text-3xl text-2xl font-bold text-gray-800 mb-4 px-4 md:px-0 text-center pt-4">
          Smart Strategies for the Digi
          <span className="text-orange-600">tal Age</span>
        </h2>
        <div className="flex justify-center items-center mb-6">
          <FaRegDotCircle className="text-2xl text-orange-600" />
          <span className="w-24 h-1 bg-orange-500 inline-block"></span>
        </div>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto px-5 md:px-0 text-center">
          Dive into the intersection of tech and business, exploring how
          cutting-edge technology solutions are reshaping industries and
          creating new opportunities and discover the innovations and strategies
          that will shape the future of tech and marketing.
        </p>
      </div>

      {loading ? (
        <p className="text-center text-xl font-semibold flex justify-center items-center gap-x-3">
          <FaSpinner className="animate-spin text-4xl text-orange-500" />
          Loading...
        </p>
      ) : (
        <>
          {currentBlogs.length > 0 && (
            <div className="w-[90%] mx-auto flex justify-evenly flex-wrap gap-x-6 gap-y-10 md:gap-y-20 mb-20">
              {currentBlogs.map((mainData) => (
                <div
                  key={mainData._id}
                  className="shadow-md rounded-xl w-[320px]"
                >
                  <img
                    src={mainData.blogImage}
                    alt=""
                    className="h-[180px] rounded-t-xl w-full"
                  />
                  <div className="mt-3 space-y-3 px-4 pb-4">
                    <div className="flex items-center justify-between">
                      <p
                        className={`inline-block ${
                          mainData.category === "Marketing"
                            ? "bg-[#b1bdff]"
                            : mainData.category === "Development"
                            ? "bg-[#b1ffc3]"
                            : mainData.category === "UI/UX"
                            ? "bg-[#e8ffb1]"
                            : mainData.category === "Design"
                            ? "bg-[#ffd1b1]"
                            : mainData.category === "IT"
                            ? "bg-[#f1b1ff]"
                            : ""
                        } text-sm font-semibold px-4 rounded-full py-1`}
                      >
                        {mainData.category}
                      </p>
                      <span className="text-xs ms-4 font-bold">
                        {new Date(mainData.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            dateStyle: "medium",
                          }
                        )}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <Link
                        to={`/blog/${mainData.blogLink}`}
                        className="text-xl md:text-xl font-bold"
                      >
                        {mainData.blogTitle}
                      </Link>
                      <p className="text-sm text-slate-500">
                        <Link
                          to={`/blog/${mainData.blogLink}`}
                          className="text-orange-600 font-semibold"
                        >
                          Read more
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mb-16">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 rounded ${
                    currentPage === 1
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-orange-500 text-white hover:bg-orange-600"
                  }`}
                >
                 <IoIosArrowBack />
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-3 py-1 rounded ${
                      currentPage === i + 1
                        ? "bg-orange-600 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-2 rounded ${
                    currentPage === totalPages
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-orange-500 text-white hover:bg-orange-600"
                  }`}
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllBlog;