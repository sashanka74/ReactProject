import { useState } from "react";
// import { Login } from "../features/Login";
import { SignUp } from "../features/Signup";

export const UserForm = () => {

  const [activeForm, setActiveForm] = useState("signup"); 

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full px-10 py-10 bg-white shadow-md sm:max-w-md sm:rounded-lg">

          {/* Conditionally Render Form */}
          {activeForm === "signup" ? <SignUp /> : <Login />}

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">

            <button
              onClick={() => setActiveForm("signup")}
              className={`inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest uppercase transition duration-150 ease-in-out border rounded-md 
                ${activeForm === "signup" ? "bg-gray-900 text-white" : "bg-gray-300 text-black"}
              `}
            >
              Signup
            </button>

            <button
              onClick={() => setActiveForm("login")}
              className={`inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest uppercase transition duration-150 ease-in-out border rounded-md 
                ${activeForm === "login" ? "bg-gray-900 text-white" : "bg-gray-300 text-black"}
              `}
            >
              Login
            </button>

          </div>

        </div>
      </div>
    </>
  );
};