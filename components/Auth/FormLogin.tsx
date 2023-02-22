import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const FormLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const base_Url = "https://web-service.herokuapp.com";

  const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${base_Url}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (!response.ok) {
        throw new Error("Error login");
      }
      // console.log(response);
      router.push('/')
    } catch (error) {
      console.log({ message: error });
    }
  };

  return (
    <div>
      <form onSubmit={submitLogin} className="w-[20rem]">
        <div className="mb-3 space-y-2">
          <label htmlFor="#" className="font-medium">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="bg-[#f5f5f5] rounded-sm w-full px-2 py-3"
          />
        </div>
        <div className="mb-3 space-y-2">
          <label htmlFor="#" className="font-medium">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="bg-[#f5f5f5] rounded-sm w-full px-2 py-3"
          />
        </div>
        <div className="mb-4 flex items-center">
          <div className="flex space-x-2 items-center">
            <div className="border-[1px] border-gray w-4 h-4" />
            <p>Remember me</p>
          </div>
          <Link href={"/login"} className="text-[.9rem] ml-auto">
            Forgot password
          </Link>
        </div>
        <div className="mb-3">
          <button className="bg-dark-blue rounded-sm py-3 w-full text-white font-medium">
            Login Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
