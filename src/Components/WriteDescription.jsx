import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's default styling

const WriteDescription = ({ setValue, value }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const modules = {
        toolbar: [
            // Font style
            [{ font: [] }], // Font family dropdown
            [{ size: [] }], // Font size dropdown

            // Headers
            [{ header: [1, 2, 3, 4, 5, 6, false] }], // Dropdown for headers

            // Text styling
            ["bold", "italic", "underline", "strike"], // Bold, italic, underline, strike-through

            // Lists and Indents
            [{ list: "ordered" }, { list: "bullet" }], // Ordered and unordered lists
            [{ indent: "-1" }, { indent: "+1" }], // Indent and outdent

            // Scripts and Alignment
            [{ script: "sub" }, { script: "super" }], // Subscript and superscript
            [{ align: [] }], // Text alignment options

            // Colors
            [{ color: [] }, { background: [] }], // Font color and background color

            // Rich Media
            ["link", "image", "video"], // Links, images, and videos

            // Blocks
            ["blockquote", "code-block"], // Blockquote and code block

            // Math and Formatting
            ["formula"], // Math formulas
            ["clean"], // Clear formatting
        ],

    };


    return (
        <div>
            {/* Button to open modal */}
            <span
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 border-2 border-orange-500 text-orange-500 rounded cursor-pointer font-bold hover:bg-orange-50 inline-block mt-2"
            >
                Open Text Editor
            </span>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white w-full h-full lg:w-3/4 lg:h-3/4 p-6 rounded-md z-30">
                        {/* Close button */}
                        <span
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 cursor-pointer"
                        >
                            Close
                        </span>

                        {/* Editor */}
                        <ReactQuill
                            modules={modules}
                            value={value}
                            onChange={setValue}
                            theme="snow"
                            style={{
                                height: "calc(100% - 50px)", // Adjust height to fit modal
                                width: "100%",
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default WriteDescription;