import SignUpForm from "@/app/_components/SignUpForm";
import Link from "next/link";
import React from "react";

const SignUp = async () => {
  return (
    <div className="h-[100%] flex flex-col items-center justify-center space-y-5 ">
      <h1 className="text-3xl w-full text-center font-bold mb-6">Sign Up</h1>
      <SignUpForm />
      <div className="mt-2 flex items-center">
        <h1>Already have an account?</h1>
        <Link className="font-bold ml-2" href="/login">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
