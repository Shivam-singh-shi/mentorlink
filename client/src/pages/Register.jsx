import AuthLayout from "../components/auth/AuthLayout";
import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join MentorLink and start your preparation today."
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
