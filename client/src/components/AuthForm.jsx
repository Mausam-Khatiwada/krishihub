// src/components/AuthForm.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaUserTag } from "react-icons/fa";

const AuthForm = ({ isLogin, onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "farmer",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };

  const validate = () => {
    const errors = {};
    if (!isLogin && !form.name.trim()) errors.name = "Name is required";
    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Enter a valid email address";
    }
    if (!form.password) {
      errors.password = "Password is required";
    } else if (form.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      onSubmit(form);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {!isLogin && (
        <div>
          <div className="relative">
            <FaUser className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-2 border rounded-lg ${
                formErrors.name ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-green-400`}
            />
          </div>
          {formErrors.name && (
            <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
          )}
        </div>
      )}

      <div>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className={`w-full pl-10 pr-4 py-2 border rounded-lg ${
              formErrors.email ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-green-400`}
          />
        </div>
        {formErrors.email && (
          <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
        )}
      </div>

      <div>
        <div className="relative">
          <FaLock className="absolute left-3 top-3.5 text-gray-400" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className={`w-full pl-10 pr-4 py-2 border rounded-lg ${
              formErrors.password ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-green-400`}
          />
        </div>
        {formErrors.password && (
          <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
        )}
      </div>

      {!isLogin && (
        <div>
          <div className="relative">
            <FaUserTag className="absolute left-3 top-3.5 text-gray-400" />
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            >
              <option value="farmer">Farmer</option>
              <option value="buyer">Buyer</option>
            </select>
          </div>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300 font-semibold"
      >
        {isLogin ? "Login" : "Register"}
      </button>

      <p className="text-center text-gray-600 text-sm">
        {isLogin ? (
          <>
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-green-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </>
        )}
      </p>
    </form>
  );
};

export default AuthForm;
