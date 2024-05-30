import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();

    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:6060/api/v1/user/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      setLoading(false);

      if (data.success) {
        navigate("/login");
      } else {
        alert("Error: " + data.message);
      }
      // console.log(data)
    } catch (error) {
      alert("something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className=" max-w-lg mx-auto p-3 w-full py-16">
      <div className="flex items-center justify-center w-[80%]">
        <h1 className="my-7 font-semibold text-3xl text-white">Sign Up</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[80%]">
        <input
          type="text"
          onChange={handleChange}
          id="userName"
          placeholder="username"
          className="bg-slate-200 p-2 rounded-lg border"
        />
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
          {loading ? "Loading..." : "SIGN IN"}
        </button>
      </form>
      <p className="bg-red-700 p-2 rounded-lg border text-white text-center mt-3 font-semibold w-[80%]">
        SIGN IN USING GOOGLE
      </p>
      <div className="flex gap-2 mt-3">
        <p className="text-lightText">Don't have an account?</p>
        <Link to="/login">
          <span className="text-blue-700 font-semibold">Login</span>
        </Link>
      </div>
    </div>
  );
}

export default Register;
