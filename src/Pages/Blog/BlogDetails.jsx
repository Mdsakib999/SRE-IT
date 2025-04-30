import { Link, useParams } from "react-router-dom";
// import { blogData } from "../../utils/BlogData";
import { useEffect, useState } from "react";
import {
  FaHeart,
  FaFacebookSquare,
  FaLinkedin,
  FaSpinner,
} from "react-icons/fa"; // Import social icons
import { FaSquareXTwitter } from "react-icons/fa6";

const BlogDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const { blogLink } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        //  console.log("Fetching blog:", blogLink);
        const response = await fetch(`https://serverit.smitsolution.com.bd/blogs/${blogLink}`);
        if (!response.ok) {
          throw new Error("Blog not found");
        }
        const data = await response.json();
        //  console.log("Fetched Blog Data:", data)
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogLink]);

  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => setLiked((prev) => !prev);
  const handleScrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  if (!blog) return <p className="text-center text-xl font-semibold flex justify-center items-center gap-x-3 mt-28">
  <FaSpinner className="animate-spin text-4xl text-orange-500" />
  Loading... </p>; // Handle case if data is not found

  const blogUrl = window.location.href; // Gets the current blog URL for sharing
  const blogTitle = encodeURIComponent(blog.title);

  return (
    <div className="bg-[#F8F8FA] w-full py-24">

        <div className="w-[95%] lg:w-[60%] bg-white h-fit rounded-xl mx-auto shadow-lg">
          <div className="p-8">
            {/* Blog Content Section */}
            <p
              className={`inline-block ${
                blog.category === "Marketing"
                  ? "bg-[#b1bdff]"
                  : blog.category === "Development"
                  ? "bg-[#b1ffc3]"
                  : blog.category === "UI/UX"
                  ? "bg-[#e8ffb1]"
                  : blog.category === "Design"
                  ? "bg-[#ffd1b1]"
                  : blog.category === "IT"
                  ? "bg-[#f1b1ff]"
                  : ""
              } text-sm rounded-full uppercase bg-[#EB3B84] text-black px-4 py-1 font-bold`}
            >
              {blog.category}
            </p>
            <p className="text-xl md:text-2xl font-bold mt-3 ml-2">
              {blog.blogTitle}
            </p>

            {/* Image Section */}
            {/* h-[250px] md:h-[350px] image style */}
            <div className=" ">
              <img
                src={blog.blogImage}
                className="h-full w-full mt-6 rounded-xl"
                alt="Blog Image"
              />
            </div>

            {/* Like Section */}
            <div className="flex justify-between items-center mt-4 pb-3 border-b">
              <div className="flex items-center space-x-2">
                <div
                  className={`cursor-pointer rounded-full p-2 ${
                    liked ? "bg-red-100" : "bg-orange-100"
                  }`}
                  onClick={handleLikeClick}
                >
                  <FaHeart
                    className={`h-4 w-4 sm:h-6 sm:w-6 transition-all duration-300 ${
                      liked ? "text-red-500" : "text-gray-400"
                    }`}
                  />
                </div>
                <span className="text-gray-700 text-sm">
                  {liked ? "You liked this post." : "Do you like this post?"}
                </span>
              </div>

              {/* Social Media Share Icons */}
              <div className="md:flex items-center gap-4 mt- justify-end hidden">
                <p className="font-semibold text-gray-500">Share this Blog:</p>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${blogUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  <FaFacebookSquare size={24} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${blogUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${blogUrl}&text=${blogTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  <FaSquareXTwitter size={24} />
                </a>
              </div>

              <p className="text-gray-500 md:font-semibold text-sm text-center ">
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  dateStyle: "medium",
                })}
              </p>
            </div>

            {/* Main Content */}
            <div className="prose prose-slate max-w-none">
              <div
                className="text-gray-700 lg:text-lg"
                dangerouslySetInnerHTML={{ __html: blog.description }}
              ></div>
            </div>

            {/* Social Media Share Icons */}
            <div className="flex items-center gap-4 mt-8 justify-center border-t pt-3">
              <p className="font-semibold lg:text-xl text-gray-500">
                Share this Blog:
              </p>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${blogUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                <FaFacebookSquare size={24} />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${blogUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${blogUrl}&text=${blogTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaSquareXTwitter size={24} />
              </a>
            </div>
          </div>
        </div>


      {/* Related Blogs */}
      {/* <div className="md:w-[60%] px-6 mx-auto mt-16">
        <div className="border-t-2 relative mb-10">
          <h1 className="text-2xl font-bold mt-7">
            Related <span className="text-orange-400">Blog's</span>
          </h1>
          <span className="inline-block bg-orange-400 size-8 rounded-full bg-opacity-50 absolute top-3 left-[-20px] animate-pulse"></span>
        </div>
        <div className="mt-4 space-y-8">
          {relatedData
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map((item, index) => (
              <Link
                to={`/blog/${item.title.split(" ").join("-").toLowerCase()}`}
                onClick={handleScrollToTop}
                key={index}
                className="shadow-md flex flex-col md:flex-row gap-4 items-center md:max-w-[80%] rounded-xl md:py-3 md:px-2 p-4 bg-white"
              >
                <img
                  src={item.img1}
                  className="w-full md:w-36 rounded-lg"
                  alt="Related Blog"
                />
                <div>
                  <p>
                    <span
                      className={`inline-block ${
                        item.department === "Marketing"
                          ? "bg-[#b1bdff]"
                          : item.department === "Sales"
                          ? "bg-[#b1ffc3]"
                          : item.department === "Design"
                          ? "bg-[#f7ba8e]"
                          : item.department === "IT"
                          ? "bg-[#e28af6]"
                          : ""
                      } text-sm rounded-full uppercase bg-[#EB3B84] text-black px-4 py-1 font-bold`}
                    >
                      {item.department}
                    </span>{" "}
                    - <small>{item.date}</small>
                  </p>
                  <p className="text-xl font-bold">{item.title}</p>
                </div>
              </Link>
            ))}
        </div>
      </div> */}
    </div>
  );
};

export default BlogDetails;
