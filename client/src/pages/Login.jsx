// src/pages/Login.jsx
import AuthForm from "../components/AuthForm";

const Login = () => {
  const handleLogin = (formData) => {
    console.log("Login data:", formData);
    // TODO: Send login request
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Login to KrishiHub</h2>
        <AuthForm isLogin={true} onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
