// src/components/AuthForm.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const AuthForm = ({ isLogin, onSubmit }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!isLogin && (
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          value={form.name}
          onChange={handleChange}
        />
      )}
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        value={form.password}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
      >
        {isLogin ? "Login" : "Register"}
      </button>

      <p className="text-center text-gray-500 text-sm">
        {isLogin ? (
          <>
            Don’t have an account?{" "}
            <Link to="/register" className="text-green-600 hover:underline">
              Register
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Login
            </Link>
          </>
        )}
      </p>
    </form>
  );
};

export default AuthForm;
