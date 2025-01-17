"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import AuthLayout from "@/components/layouts/AuthLayout";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import useStore from "@/libs/zustand";
import { login } from "@/modules/fetch/fetchAuth";

const LoginView = () => {
  const setIsLoggedIn = useStore((state) => state.setIsLoggedIn);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      router.push("/");
    }
  }, [router, setIsLoggedIn]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccessMessage("");
    const form = event.target;
    const data = {
      username: form.username.value,
      password: form.password.value,
    };

    try {
      const result = await login(data);
      if (result.status === 200) {
        localStorage.setItem("token", result.data.accessToken);
        form.reset();
        setSuccessMessage(
          result.data.message || "Login successful. Redirecting..."
        );
        setIsLoggedIn(true);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setIsLoading(false);
        setError(result.data.message || "Username or password is incorrect");
      }
    } catch (error) {
      setIsLoading(false);
      if (error.response) {
        setError(error.response.message || "Username or password is incorrect");
      } else if (error.request) {
        setError("No response received from server. Please try again.");
      } else {
        setError("Something went wrong. Please try again.");
      }
      console.error("Login error:", error);
    }
  };

  return (
    <AuthLayout
      title="Login"
      link="/auth/register"
      linkText="Belum punya akun? "
      linkName="Register"
    >
      {successMessage && (
        <p className="flex gap-2 items-center border border-green-600 rounded-md p-3 mb-5 text-green-600 text-xs bg-green-600 bg-opacity-10">
          <CheckCircleIcon size={20} />
          {successMessage}
        </p>
      )}
      {error && (
        <p className="flex gap-2 items-center border rounded-md border-red-600 p-3 mb-5 text-red-600 text-xs bg-red-600 bg-opacity-10">
          <CancelIcon size={20} /> {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input
          label="Username"
          name="username"
          type="text"
          placeholder="Username"
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
        />
        {isLoading ? (
          <Button
            disabled
            type="button"
            className="w-full rounded-lg h-10 bg-[#7F56D9] hover:bg-[#6941C6] text-white"
          >
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 me-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Loading...
          </Button>
        ) : (
          <Button
            type="submit"
            className="w-full rounded-lg h-10 bg-[#7F56D9] hover:bg-[#6941C6] text-white my-2"
          >
            Login
          </Button>
        )}
      </form>
    </AuthLayout>
  );
};

export default LoginView;
