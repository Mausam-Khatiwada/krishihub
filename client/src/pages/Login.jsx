import axios from "../api/axios";
import AuthForm from "../components/AuthForm";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const res = await axios.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);

      toast.success("Logged in successfully!");
      setTimeout(() => navigate("/"), 1500); // delay so toast shows
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 to-green-50 px-4">
      <div className="w-full max-w-md p-10 bg-white shadow-xl rounded-3xl border border-green-300">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-green-800 tracking-wide">
          Login to KrishiHub
        </h2>
        <AuthForm isLogin={true} onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
