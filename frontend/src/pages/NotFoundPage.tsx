import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-[#19191a] text-white">
            <h1 className="text-[30px] font-bold">404: Page Not Found ❌</h1>
            <Link to={"/"} className="mt-6">
                <button className="rounded-[10px] border bg-[#55558a] p-3">Go back to Home Page</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;