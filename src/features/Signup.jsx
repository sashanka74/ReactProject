import { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
    setMessage("");
  };

  const validate = () => {
    let err = {};

    if (!formData.name.trim()) err.name = "Name is required";

    if (!formData.email.trim()) err.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      err.email = "Invalid email format";

    if (!formData.password.trim()) err.password = "Password is required";
    else if (formData.password.length < 6)
      err.password = "Password must be at least 6 characters";

    if (!formData.confirmPassword.trim())
      err.confirmPassword = "Confirm password is required";
    else if (formData.password !== formData.confirmPassword)
      err.confirmPassword = "Passwords do not match";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setMessage("Signup Successful!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

      {/* Outer gradient border */}
      <div className="w-full max-w-md bg-gradient-to-r 
          from-blue-500 via-purple-500 to-pink-500 
          shadow-xl rounded-xl p-[2px]">

        {/* Inner white card */}
        <div className="bg-white rounded-xl p-8">

          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Sign Up
          </h1>

          <form onSubmit={handleSubmit}>

            {/* NAME */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>

              <div
                className={`p-[2px] rounded-md ${
                  errors.name
                    ? "bg-red-500"
                    : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                }`}
              >
                <input
                  type="text"
                  name="name"
                  className="w-full bg-white rounded-md px-3 py-2 focus:outline-none"
                  onChange={handleChange}
                />
              </div>

              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>

              <div
                className={`p-[2px] rounded-md ${
                  errors.email
                    ? "bg-red-500"
                    : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                }`}
              >
                <input
                  type="email"
                  name="email"
                  className="w-full bg-white rounded-md px-3 py-2 focus:outline-none"
                  onChange={handleChange}
                />
              </div>

              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>

              <div
                className={`p-[2px] rounded-md ${
                  errors.password
                    ? "bg-red-500"
                    : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                }`}
              >
                <input
                  type="password"
                  name="password"
                  className="w-full bg-white rounded-md px-3 py-2 focus:outline-none"
                  onChange={handleChange}
                />
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>

              <div
                className={`p-[2px] rounded-md ${
                  errors.confirmPassword
                    ? "bg-red-500"
                    : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                }`}
              >
                <input
                  type="password"
                  name="confirmPassword"
                  className="w-full bg-white rounded-md px-3 py-2 focus:outline-none"
                  onChange={handleChange}
                />
              </div>

              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* REGISTER BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
            >
              Register
            </button>

            {message && (
              <p className="text-green-600 text-center font-semibold mt-4">
                {message}
              </p>
            )}
          </form>

          {/* LOGIN BUTTON */}
          <p className="text-center mt-4 text-sm">
            Already have an account?
            <Link
              to="/login"
              className="text-blue-900 font-bold ml-1 underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};