import LoginForm from "@/app/_components/LoginForm";
import LoginGithub from "@/app/_components/LoginGithub";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="h-[100%] flex flex-col items-center justify-center space-y-5">
      <h1 className="text-3xl w-full text-center font-bold mb-6">Sign in</h1>
      <LoginForm />
      <section className="flex flex-col items-center space-y-2 w-[90%] md:w-[70%] lg:w-[40%]">
        <LoginGithub />
        <div className="flex space-x-3">
          <h1>{`Don't have an account?`}</h1>
          <Link className="font-bold ml-2" href="/register">
            Sign Up
          </Link>
        </div>
        <div className="flex space-x-3">
          <h1>{`Forgot your password?`}</h1>
          <Link className="font-bold ml-2" href="/forgot-password">
            Reset Password
          </Link>
        </div>
      </section>
    </div>
  );
}
