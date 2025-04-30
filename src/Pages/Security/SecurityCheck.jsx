import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SecurityCheck = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const storedPassword = "SMit2021@"; // Store securely in .env for production

    const handleVerify = () => {
        if (password === storedPassword) {
            localStorage.setItem("isVerified", "true"); // Save verification status
            navigate("/dashboard", { replace: true }); // Ensure redirect happens properly
        } else {
            setError("Incorrect password. Try again!");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-bold mb-4">Enter Security Password</h2>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 mb-2"
                placeholder="Enter password"
            />
            <button onClick={handleVerify} className="bg-orange-500 text-white px-4 py-2 rounded ">
                Verify
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <Link className="border-2 text-orange-600 mt-10 px-6 py-2 rounded-md font-semibold border-orange-400" to="/">Back to home</Link>
        </div>
    );
};

export default SecurityCheck;
