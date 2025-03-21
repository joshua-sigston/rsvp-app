"use client";
import React, { useState } from "react";
import AuthButton from "./AuthButton";
import { useRouter } from "next/navigation";
import { signIn } from "../actions/auth";
import { Input, Label } from "@/components/ui";

const LoginForm = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const result = await signIn(formData);

    if (result.status === "success") {
      router.push("/dashboard");
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
        <Label htmlFor="email">Email</Label>
        <Input type="email" placeholder="Email" id="Email" name="email" />
      </div>
      <div className="space-y-3">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
        />
      </div>
      <div className="flex justify-center">
        <AuthButton type="login" loading={loading} />
      </div>

      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default LoginForm;
