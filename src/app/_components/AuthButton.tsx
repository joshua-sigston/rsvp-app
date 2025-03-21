import { Button } from "@/components/ui";
import React from "react";

const AuthButton = ({
  type,
  loading,
}: {
  type: "login" | "Sign up" | "Reset Password" | "Forgot Password";
  loading: boolean;
}) => {
  return (
    <Button disabled={loading} type="submit" className="w-[100%]">
      {loading ? "Loading..." : type}
    </Button>
  );
};

export default AuthButton;
