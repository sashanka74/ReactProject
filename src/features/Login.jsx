import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (!formData.email.trim()) err.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      err.email = "Invalid email format";

    if (!formData.password.trim()) err.password = "Password is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setMessage("Login Successful!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

      {/* Outer gradient border */}
      <div className="w-full max-w-md bg-linear-to-r 
      from-blue-500 via-purple-500 to-pink-500 
      p-0.5 rounded-xl shadow-lg">

        {/* Inner white content */}
        <div className="bg-white rounded-xl p-8">

          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Login
          </h1>

          <form onSubmit={handleSubmit}>

            {/* EMAIL */}
            <div className="mb-4">
              <label className="block font-medium text-gray-700 text-sm">
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
              <label className="block font-medium text-gray-700 text-sm">
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

            {/* LOGIN BUTTON */}
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
            >
              Login
            </button>

            {message && (
              <p className="text-green-600 mt-4 text-center font-semibold">
                {message}
              </p>
            )}

            {/* SIGNUP LINK */}
            <p className="text-center mt-4 text-sm">
              Don’t have an account?
              <Link to="/signup" className="text-blue-600 font-semibold ml-1">
                SignUp
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};