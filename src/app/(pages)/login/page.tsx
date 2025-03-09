"use client";

import { signIn } from "@/app/actions/auth";
import { Button, Input, Label } from "@/components/ui";
import React, { useActionState } from "react";

async function signInAction(
  prevState: { error: string } | null,
  formData: FormData
) {
  return await signIn(prevState, formData);
}

const login = () => {
  const [state, formAction] = useActionState(signInAction, null);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        action={formAction}
        className="p-8 bg-white rounded-lg shadow-md w-96"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          {state?.error && (
            <p className="text-red-500 text-sm">{state?.error}</p>
          )}
          <Button type="submit" className="w-full">
            Log In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default login;
