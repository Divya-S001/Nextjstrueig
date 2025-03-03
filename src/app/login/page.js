"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ name, email, password });
  };
  return (
    <div className="flex justify-center py-20">
      <form
        onSubmit={handleLogin}
        className="p-6 shadow-md  bg-6 text-3xl bg-black w-[40vw] min-w-[300px] p-10px rounded-2xl"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>

        <label className="block mb-1 text-2xl font-bold">Name:</label>
        <input
          type="name"
          placeholder=" Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 w-full mt-2 text-[25px]"
        />
        <label className="block mb-1 text-2xl font-bold">Email:</label>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 w-full mt-2 text-[25px]"
        />

        <label className="block mb-1 text-2xl font-bold">Password:</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2 w-full mt-2 text-[25px]"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-black active:scale-95 mt-4"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
