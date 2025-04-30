/* eslint-disable react/prop-types */
import { useRef } from "react";

const Modal = ({ isOpen, onClose, children }) => {
    const dialogRef = useRef(null);

    // Close the modal when clicking outside
    const handleOutsideClick = (event) => {
        if (dialogRef.current && !dialogRef.current.contains(event.target)) {
            onClose();
        }
    };

    return (
        <>

            {
                isOpen && (
                    <div
                        onClick={handleOutsideClick}
                        className=" w-full  overflow-y-auto fixed inset-0 flex justify-center items-center bg-black bg-opacity-20 backdrop-blur-md z-30">
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={onClose}
                                className="absolute top-2 right-2 text-black  focus:outline-none"
                            >
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
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <dialog
                            ref={dialogRef}
                            open
                            className={` h-auto overflow-y-auto text-white rounded-lg shadow-lg  max-w-4xl  relative transform transition-transform duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                                }`}
                        >
                            <div>
                                {children}</div>

                        </dialog>
                    </div>
                )
            }
        </>
    );
};

export default Modal;