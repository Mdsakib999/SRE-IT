import React, { useEffect, useState } from "react";
import WriteDescription from "../../Components/WriteDescription";
import Swal from "sweetalert2";

const AddBlog = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [value, setValue] = useState("");
  const [formData, setFormData] = useState({
    blogTitle: "",
    blogLink: "",
    description: value,
    blogImage: "",
    cardDescription: "",
    category: "IT", // Default category
    createdAt: "", // New field for storing created date
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      description: value,
    }));
  }, [value]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);

    // Add the current date as the createdAt field
    const currentDate = new Date().toISOString();
    const blogData = { ...formData, createdAt: currentDate };

    try {
      const response = await fetch("https://serverit.smitsolution.com.bd/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });
      
      const result = await response.json();

      if (response.ok) {
        Swal.fire("Success", "Blog has been published successfully!", "success");
        setFormData({
          blogTitle: "",
          blogLink: "",
          description: "",
          blogImage: "",
          cardDescription: "",
          category: "IT", // Reset category to default
          createdAt: "", // Reset createdAt field
        });
        setValue("");
      } else {
        Swal.fire("Error", result.message || "Failed to publish blog", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong!", "error");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg space-y-6 my-10"
      >
        <h2 className="text-3xl font-extrabold text-gray-800 text-center">
          Create a Blog
        </h2>

        <div>
          <label htmlFor="blogTitle" className="block text-sm font-semibold text-gray-700">
            Blog Title
          </label>
          <input
            type="text"
            id="blogTitle"
            name="blogTitle"
            required
            value={formData.blogTitle}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-3 border rounded-md shadow-sm outline-orange-300 text-gray-800"
            placeholder="Enter blog title"
          />
        </div>

        <div>
          <label htmlFor="blogLink" className="block text-sm font-semibold text-gray-700">
            Blog Link
          </label>
          <input
            type="text"
            id="blogLink"
            name="blogLink"
            required
            value={formData.blogLink}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-3 border rounded-md shadow-sm outline-orange-300 text-gray-800"
            placeholder="enter-blog-link-like-this"
          />
        </div>

        <div>
          <label htmlFor="blogImage" className="block text-sm font-semibold text-gray-700 outline-orange-300">
            Blog Home Image
          </label>
          <input
            type="text"
            id="blogImage"
            name="blogImage"
            required
            value={formData.blogImage}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-800 outline-orange-300"
            placeholder="Enter image URL"
          />
        </div>

        <div>
          <label htmlFor="cardDescription" className="block text-sm font-semibold text-gray-700 ">
            Card Description
          </label>
          <textarea
            id="cardDescription"
            name="cardDescription"
            maxLength={120}
            value={formData.cardDescription}
            onChange={handleChange}
            placeholder="Enter up to 120 characters"
            className="mt-2 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-800 outline-orange-300"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-semibold text-gray-700">
            Blog Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-800"
          >
            <option value="IT">IT</option>
            <option value="Marketing">Marketing</option>
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="UI/UX">UI/UX</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
            Blog Description
          </label>
          <div className="mt-2">
            <WriteDescription setValue={setValue} value={value} />
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full px-6 py-3 text-white bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-400 hover:to-orange-600 rounded-lg font-bold shadow-md"
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Publish Blog"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
