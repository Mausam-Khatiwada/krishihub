// src/pages/Register.jsx
import AuthForm from "../components/AuthForm";

const Register = () => {
  const handleRegister = (formData) => {
    console.log("Register data:", formData);
    // TODO: Send register request
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Create Your Account</h2>
        <AuthForm isLogin={false} onSubmit={handleRegister} />
      </div>
    </div>
  );
};

export default Register;
