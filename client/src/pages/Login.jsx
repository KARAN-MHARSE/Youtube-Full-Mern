import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInfailed,
  setIsSignInPage,
} from "../redux/user/userSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);

  const user = useSelector((state) => state);

  const handleChange = (e) => {
    e.preventDefault();

    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(signInStart());

    const res = await fetch(
      "https://youtube-full-mern-1.onrender.com/api/v1/user/auth/login",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json", // Specify JSON content type
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await res.json();

    if (data.success) {
      dispatch(signInSuccess(data.user));
      dispatch(setIsSignInPage(false));
      navigate("/");
    } else {
      dispatch(signInfailed());
      alert(`Error: ${data.message}`);
    }
  };
  // console.log(formData)
  return (
    <div className=" max-w-lg mx-auto p-3 w-full py-16">
      <div className="flex items-center justify-center w-[80%]">
        <h1 className="my-7 font-semibold text-3xl text-white">Sign In</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[80%]">
        <input
          type="email"
          onChange={handleChange}
          id="email"
          placeholder="email"
          className="bg-slate-200 p-2 rounded-lg border"
        />
        <input
          type="password"
          onChange={handleChange}
          id="password"
          placeholder="password"
          className="bg-slate-200 p-2 rounded-lg border"
        />
        <button className="bg-slate-700 p-2 rounded-lg border font-semibold text-white">
          {user.loading ? "Loading..." : "SIGN IN"}
        </button>
      </form>
      <p className="bg-red-700 p-2 rounded-lg border text-white text-center mt-3 font-semibold w-[80%]">
        SIGN IN USING GOOGLE
      </p>
      <div className="flex gap-2 mt-3">
        <p className="text-lightText">Don't have an account?</p>
        <Link to="/register">
          <span className="text-blue-700 font-semibold">Register</span>
        </Link>
      </div>
      <p>Error:</p>
    </div>
  );
}

export default Login;
