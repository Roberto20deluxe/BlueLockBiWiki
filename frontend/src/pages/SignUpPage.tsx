import React from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

const SignUpPage = () => {
    const formRef = React.useRef<HTMLFormElement>(null);

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = formRef.current;
        if (!form) return;

        const username = (form.username as HTMLInputElement).value.trim();
        const email = (form.email as HTMLInputElement).value.trim();
        const password = (form.password as HTMLInputElement).value;
        const repeatPassword = (form.repeatPassword as HTMLInputElement).value;

        if (!username || !email || !password || !repeatPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (password !== repeatPassword) {
            alert("Passwords do not match");
            return;
        }

        const formData = { username, email, password };

        try {
            await api.post("/users", formData);
            form.reset();
            alert("Sign up successful!");
        } catch (error) {
            console.error("Error while signing up", error);
            alert("Failed to sign up. Please try again.");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-[#19191a]">
            <div className="bg-[#1046A9] rounded-[10px] w-[400px] h-[500px] flex flex-col items-center justify-center py-8">
                <h1 className="text-white px-2 mb-6 text-[20px]">Cadastro Egoist</h1>
                <form ref={formRef} onSubmit={handleSignUp} className="flex flex-col gap-y-4 w-full px-8">
                    <input name="username" type="text" placeholder="username" className="rounded px-3 py-2 outline-none bg-white" />
                    <input name="email" type="email" placeholder="email" className="rounded px-3 py-2 outline-none bg-white" />
                    <input name="password" type="password" placeholder="password" className="rounded px-3 py-2 outline-none bg-white" />
                    <input name="repeatPassword" type="password" placeholder="repeat password" className="rounded px-3 py-2 outline-none bg-white" />
                    <button type="submit" className="bg-white text-[#1046A9] font-bold py-2 rounded mt-2 cursor-pointer hover:bg-gray-200 transition">
                        Sign Up
                    </button>
                    <div className="flex justify-between text-white text-sm">
                        <Link to="/login" className="hover:underline">Already have an account?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;