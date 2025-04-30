import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingComponent from "../../Components/LoadingComponent";

const DashboardBlogDetails = () => {
    const { blogLink } = useParams(); // Get blogLink from URL
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchBlog = async () => {
          try {
            console.log("Fetching blog:", blogLink);
            const response = await fetch(`https://serverit.smitsolution.com.bd/blogs/${blogLink}`);
            if (!response.ok) {
              throw new Error("Blog not found");
            }
            const data = await response.json();
            setBlog(data);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchBlog();
      }, [blogLink]);

      // console.log(blog)
    
      if (loading) return <p className="text-center text-gray-500"> </p>;
      if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.blogTitle}</h1>
      <img src={blog.blogImage} alt={blog.blogTitle} className="w-full rounded-lg mb-4" />
      {/* <p className="text-gray-700">{blog.description}</p> */}
      <div className="prose  prose-slate max-w-none">
      <div className="text-gray-700 " dangerouslySetInnerHTML={{ __html: blog.description }}></div>

      </div>
    </div>
    );
};

export default DashboardBlogDetails;