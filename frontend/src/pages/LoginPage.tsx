import React from "react";
import api from "../services/api"
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const formRef = React.useRef<HTMLFormElement>(null)
    const navigate = useNavigate();

    const handleLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = formRef.current;
        if (!form) return;

        const email = (form.email as HTMLInputElement).value.trim();
        const password = (form.password as HTMLInputElement).value;

        if (!email || !password) {
            alert("Please fill all fields."); 
            return;
        }

        const formData = { email, password }

        try {
            const permission = await api.post('/users/login', formData)
            localStorage.setItem("token", permission.data.accessToken);
            form.reset();
            if (permission.status === 200) {
                navigate("/");
            }
        } catch (err) {
            console.error(err, "Login error")
            alert("Failed to login!")
        }
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-[#19191a]">
            <div className="bg-[#1046A9] rounded-[10px] w-[400px] h-[400px] flex flex-col items-center justify-center py-8">
                <h1 className="text-white px-2 mb-6 text-[20px]">Login Egoist</h1>
                <form ref={formRef} onSubmit={handleLogIn} className="flex flex-col gap-y-4 w-full px-8">
                    <input name="email" type="email" placeholder="email" className="rounded px-3 py-2 outline-none bg-white" />
                    <input name="password" type="password" placeholder="password" className="rounded px-3 py-2 outline-none bg-white" />
                    <button type="submit" className="bg-white text-[#1046A9] font-bold py-2 rounded mt-2 cursor-pointer hover:bg-gray-200 transition">
                        Login
                    </button>
                    <div className="flex justify-between text-white text-sm">
                        <span className="cursor-pointer hover:underline">forgot my password</span>
                        <Link to="/register" className="hover:underline">sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;