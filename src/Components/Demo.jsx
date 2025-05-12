import React from "react";

const RetrieveXPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-bold">RetrieveX</h1>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Found Items</a>
            <a href="#" className="hover:underline">Lost Items</a>
            <a href="#" className="hover:underline">About Us</a>
          </div>
        </nav>

        {/* Main Content */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-12">
            <hr className="border-t border-white/30 mb-12" />
            <h2 className="text-3xl font-bold mb-4">Lost Something? Found Something?</h2>
            <h3 className="text-2xl mb-8">We've Got You Covered!</h3>
            <p className="text-lg mb-8">
              Join our community to report and find lost items easily.
            </p>
            <div className="flex justify-center space-x-6">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                REPORT A LOST ITEM
              </button>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                REPORT A FOUND ITEM
              </button>
            </div>
          </div>

          <hr className="border-t border-white/30 my-12" />

          {/* Auth Buttons */}
          <div className="flex justify-center space-x-6">
            <button className="border-2 border-white px-6 py-2 rounded-lg font-bold hover:bg-white/10 transition">
              SIGN UP
            </button>
            <button className="border-2 border-white px-6 py-2 rounded-lg font-bold hover:bg-white/10 transition">
              LOGIN
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-24 text-center text-sm text-white/70">
          <p>Activate Windows</p>
          <p>Go to Settings to activate Windows.</p>
        </div>
      </div>
    </div>
  );
};

export default RetrieveXPage;