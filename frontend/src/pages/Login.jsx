import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-teal-950">
        <div className="text-2xl font-bold mb-4">Login</div>
        <input
          type="text"
          placeholder="Username"
          name="harshil09"
          className="bg-teal-700 px-3 py-2 my-3 w-full rounded"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="bg-teal-700 px-3 py-2 my-3 w-full rounded"
          required
        />
        <div className="w-full flex justify-between items-baseline">
          <button className="mt-4 px-3 py-2 bg-teal-800 rounded text-lg font-semibold">
            Login
          </button>
          <div className="text-sm">
            Not having an account? &nbsp; <Link to={"/signup"} className="underline hover:underline-offset-2"> Signup here </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
