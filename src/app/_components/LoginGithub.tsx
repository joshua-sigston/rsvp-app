"use client";

import { Button } from "@/components/ui";
import React, { useTransition } from "react";
import { FaGithub } from "react-icons/fa";

const LoginGithub = () => {
  const [isPending, startTransition] = useTransition();

  const handleGithubLogin = () => {
    startTransition(async () => {
      // await signInWithGithub();
    });
  };
  return (
    <Button onClick={handleGithubLogin} className="w-[100%]">
      <FaGithub className="text-white" />
      {isPending ? "Redirecting..." : "Login with Github"}
    </Button>
  );
};

export default LoginGithub;
