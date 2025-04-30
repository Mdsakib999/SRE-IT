import { Link } from "react-router-dom";
// import { blogData } from "../../utils/BlogData";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

const Blog = () => {

  // https://serverit.smitsolution.com.bd

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://serverit.smitsolution.com.bd/blogs");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // console.log(blogs)
  // console.log(blogData)

  return (
    <div className="section-container pb-8  md:py-10 ">
      <div>
        <p className="bg-[#a0e3fbb7] inline-block px-4 py-1 rounded-full">
          <span className="size bg-orange-400 size-3 inline-block  rotate-45"></span>{" "}
          <span className="text-sm font-semibold ml-1">BLOG</span>
        </p>
        <p className="text-xl md:text-3xl font-bold mt-3">
          Latest From{" "}
          <span className=" font-manrope  leading-snug text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-600 to-amber-400">
            SRE IT Solution
          </span>{" "}
        </p>
      </div>

      {
        loading ? (<p className="text-center text-xl font-semibold flex justify-center items-center gap-x-3">
                  <FaSpinner className="animate-spin text-4xl text-orange-500" />Loading...
                </p>) : (<div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8 ">
        {blogs.length > 0 && (
          <div>
            <div className="shadow-md rounded-xl">
              <img
                src={blogs[1].blogImage}
                alt="blog image"
                className="max-h-[260px] rounded-t-xl w-full"
              />
              <div className="mt-5 space-y-3 px-4 pb-4 ">
                <div>
                  <p className="inline-block bg-[#f1b1ff] text-[#3f3285] text-sm font-semibold px-4 rounded-full py-1">
                    {blogs[1].category}
                  </p>
                  <span className="text-xs ms-4">
                    {new Date(blogs[1].createdAt).toLocaleDateString("en-US", {
                      dateStyle: "medium",
                    })}
                  </span>
                </div>
                <div className="space-y-3">
                  <Link
                    to={`/blog/${blogs[1].blogLink}`}
                    className="text-xl md:text-3xl font-bold "
                  >
                    {blogs[1].blogTitle}
                  </Link>
                  <p className="text-sm text-slate-500">
                    {blogs[1].cardDescription}...
                    <Link
                      to={`/blog/${blogs[1].blogLink}`}
                      className="text-orange-500 font-semibold  pl-1"
                    >
                      see more
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {blogs.length > 0 && (
          <div className="space-y-8 ">
            {blogs
              .slice(-3)
              .reverse()
              .map((item, index) => (
                <Link
                  to={`/blog/${item.blogLink}`}
                  key={index}
                  className="shadow-md rounded-lg flex justify-between p-2 md:p-4 bg-slate-50"
                >
                  <div>
                    <div>
                      <p
                        className={`inline-block ${
                          item.category === "Marketing"
                            ? "bg-[#b1bdff]"
                            : item.category === "Development"
                            ? "bg-[#b1ffc3]"
                            : item.category === "UI/UX"
                            ? "bg-[#e8ffb1]"
                            : item.category === "Design"
                            ? "bg-[#ffd1b1]"
                            : item.category === "IT"
                            ? "bg-[#f1b1ff]"
                            : ""
                        } text-sm font-semibold px-4 rounded-full py-1`}
                      >
                        {item.category}
                      </p>
                      <span className="text-xs ms-4 text-slate-700">
                        {new Date(item.createdAt).toLocaleDateString("en-US", {
                          dateStyle: "medium",
                        })}
                      </span>
                    </div>
                    <p className="text-base md:text-lg font-bold mt-4">
                      {item.blogTitle}
                    </p>
                  </div>
                  <img
                    src={item.blogImage}
                    alt="Blog image"
                    className="w-28 md:w-36 rounded-xl"
                  />
                </Link>
              ))}
          </div>
        )}
      </div>)
      }

      

      <Link
        to="/blog"
        className=" flex flex-col items-center justify-end mr-1 mt-12 "
      >
        <div className="cursor-pointer">
          <button className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-orange-600 transition duration-300 ease-out border-2 border-orange-500 rounded-full shadow-lg group shadow-orange-100">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-orange-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Read more
            </span>
            <span className="relative invisible">Read more</span>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
