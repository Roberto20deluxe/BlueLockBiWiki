import React from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {

    const handleLogIn = (event: React.FormEvent<HTMLFormElement>) => {}

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-[#19191a]">
            <div className="bg-[#1046A9] rounded-[10px] w-[400px] h-[400px] flex flex-col items-center justify-center py-8">
                <h1 className="text-white px-2 mb-6 text-[20px]">Login Egoist</h1>
                <form onSubmit={handleLogIn} className="flex flex-col gap-y-4 w-full px-8">
                    <input type="email" placeholder="email" className="rounded px-3 py-2 outline-none bg-white" />
                    <input type="password" placeholder="password" className="rounded px-3 py-2 outline-none bg-white" />
                    <button type="submit" className="bg-white text-[#1046A9] font-bold py-2 rounded mt-2 cursor-pointer hover:bg-gray-200 transition">
                        Login
                    </button>
                    <div className="flex justify-between text-white text-sm">
                        <span className="cursor-pointer hover:underline">forgot my password</span>
                        <Link to="/login" className="hover:underline">sign in</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;