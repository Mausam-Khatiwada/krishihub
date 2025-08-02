import axios from "../api/axios";
import AuthForm from "../components/AuthForm";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    try {
      const res = await axios.post("/auth/register", formData);

      toast.success("Registered successfully!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 to-green-50 px-4">
      <div className="w-full max-w-md p-10 bg-white shadow-xl rounded-3xl border border-green-300">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-green-800 tracking-wide">
          Create Your Account
        </h2>
        <AuthForm isLogin={false} onSubmit={handleRegister} />
      </div>
    </div>
  );
};

export default Register;
