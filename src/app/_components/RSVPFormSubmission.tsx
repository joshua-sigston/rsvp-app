import { Input, Label } from "@/components/ui";
import React, { useState } from "react";

const RSVPFormSubmission = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitInvitation = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);

    return null;
  };
  return (
    <form onSubmit={handleSubmitInvitation}>
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>
      <div>
        <Label htmlFor="email">Event Location</Label>
        <Input
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        {errors.location && (
          <p className="text-red-500 text-sm mt-1">{errors.location}</p>
        )}
      </div>
    </form>
  );
};

export default RSVPFormSubmission;
