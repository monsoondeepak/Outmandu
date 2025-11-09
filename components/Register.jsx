"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AuthForm({ type = "login" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate required fields
    if (type === "register" && (!name || !email || !password)) {
      setError("All fields are necessary.");
      return;
    }

    if (type === "login" && (!email || !password)) {
      setError("Email and password are required.");
      return;
    }

    try {
      if (type === "register") {
        // Check if user already exists
        const resUserExists = await fetch("api/userExists", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        const { user } = await resUserExists.json();
        if (user) {
          setError("User already exists.");
          return;
        }

        // Register new user
        const res = await fetch("api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });

        if (res.ok) {
          e.target.reset();
          router.push("/");
        } else {
          setError("User registration failed.");
        }
      } else {
        // Handle login logic here
        const res = await fetch("api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        if (res.ok) {
          const data = await res.json();
          localStorage.setItem("token", data.token); // store JWT
          router.push("/dashboard");
        } else {
          setError("Invalid email or password.");
        }

      }
    } catch (err) {
      console.error("Error during authentication:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br via-purple-600 to-pink-500 p-4">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-md p-8 border border-white/20">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800">
            {type === "login" ? "Welcome Back 👋" : "Join Us Today ✨"}
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            {type === "login"
              ? "Login to your account to continue"
              : "Create an account to get started"}
          </p>
        </div>

        {/* Google Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2 font-medium text-gray-700 hover:bg-gray-100 transition mb-6"
        >
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google logo"
            width={20}
            height={20}
          />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center my-4">
          <span className="w-1/5 border-b border-gray-300"></span>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <span className="w-1/5 border-b border-gray-300"></span>
        </div>

        {/* Email/Password Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {type === "register" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your name"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            {type === "login" ? "Login" : "Register"}
          </button>
        </form>

        {/* Footer Links */}
        <p className="text-center text-sm text-gray-600 mt-6">
          {type === "login" ? (
            <>
              Don’t have an account?{" "}
              <Link
                href="/register"
                className="text-indigo-600 font-medium hover:underline"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-indigo-600 font-medium hover:underline"
              >
                Login
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
