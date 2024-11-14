import LoginForm from "../components/LoginForm";
import AuthenticationLayout from "../layouts/AuthenticationLayout";

export default function LoginScreen() {
  // ----------------------------------------------------------------------------------------------------
  // MARK: Main Component UI
  // ----------------------------------------------------------------------------------------------------
  return (
    <AuthenticationLayout>
      <LoginForm />
    </AuthenticationLayout>
  );
}