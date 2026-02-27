import React, { useState } from "react";
import { FiMail } from "react-icons/fi";
import { FaKey } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { MdOutlineErrorOutline } from "react-icons/md";

const Login = () => {
  // states
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    // check if email and password are provided
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Clear previous errors if exists
    setError(null);

    // api endpoint for login
    const url = "https://task-api-eight-flax.vercel.app/api/login";

    // prepare json data to send in the request body
    const postData = {
      email: email,
      password: password,
    };

    // set loading state
    setLoading(true);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (!response.ok) {
          setError("Invalid email or password.");
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        console.log(data);
        if (data.token) {
          localStorage.setItem("token", data.token);
          alert("Login successful!");
        } else {
          setError(data.message || "Login failed. Please try again.");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-100 p-6 border border-base-content/20 rounded-xl shadow-lg max-w-sm">
        <h2 className="font-semibold text-2xl text-center">Login</h2>
        {error && (
          <div className="alert alert-soft alert-error mt-4">
            <MdOutlineErrorOutline className="-mr-2" size={18} />
            {error}
          </div>
        )}
        <form className="mt-4" onSubmit={handleLogin}>
          <div className="">
            <span className="label">Email</span>
            <label className="input validator rounded-lg">
              <FiMail />
              <input
                type="email"
                name="email"
                placeholder="mail@site.com"
                required
                disabled={loading}
              />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <div className="mt-2">
            <span className="label">Password</span>
            <label className="input rounded-lg">
              <FaKey />
              <input
                type="password"
                name="password"
                required
                disabled={loading}
                placeholder="Password"
                minLength="8"
              />
            </label>
          </div>
          <div className="mt-4 text-center">
            <button
              className="btn btn-primary rounded-lg btn-block"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-bars loading-xs"></span>
              ) : (
                <FaSignInAlt />
              )}
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
