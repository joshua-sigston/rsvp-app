"use client";
import React, { useState } from "react";
import AuthButton from "./AuthButton";
import { signUp } from "../actions/auth";
import { useRouter } from "next/navigation";
import { Input, Label } from "@/components/ui";

const SignUpForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const result = await signUp(formData);

    if (result.status === "success") {
      router.push("/login");
    } else {
      setError(result.status);
    }

    setLoading(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] md:w-[70%] lg:w-[40%] space-y-5"
    >
      <div className="space-y-3">
        <Label>Username</Label>
        <Input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
        />
      </div>
      <div className="space-y-3">
        <Label>Email</Label>
        <Input type="email" placeholder="Email" id="Email" name="email" />
      </div>
      <div className="space-y-3">
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
        />
      </div>
      <div className="mt-4">
        <AuthButton type="Sign up" loading={loading} />
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default SignUpForm;
