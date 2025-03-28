"use client";
import React, { useState } from "react";
import {
  Button,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Calendar,
} from "@/components/ui";
import { MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { strings } from "../utils/strings";
import { submitRSVP } from "../actions/submitRSVP";
import Link from "next/link";

const RSVPForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accompany, setAccompany] = useState<string | null>(null);
  const [attendance, setAttendance] = useState("yes");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  // jP647Tr92iAe9FGi

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name) {
      setErrors({ name: "Name is required" });
      return;
    }

    if (!email) {
      setErrors({ email: "Email is required" });
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("accompany", accompany || "0");
    formData.append("attendance", attendance);

    console.log(formData, "FormData");

    setIsLoading(true);

    const resp = await submitRSVP(formData);

    if (resp.success) {
      toast({
        title: "Successful",
        description: strings.thankYouMessage,
      });
      // reset form
      setName("");
      setEmail("");
      setAccompany("");
      setAttendance("");
      setErrors({});
    } else {
      toast({
        title: "Error",
        description: resp.message,
        variant: "destructive",
      });
      //check if email already submitted
    }

    setIsLoading(false);
  };

  const openGoogleMaps = () => {
    const encodedLocation = encodeURIComponent(strings.eventLocation);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`
    );
  };

  return (
    <div className="max-w-md max-auto my-10">
      <h1 className="text-2xl font-bold-mb-4">{strings.title}</h1>
      <p className="mb-6">{strings.description}</p>
      <div className="mb-6">
        {/* <Label>{strings.eventDateLabel}</Label>
        <Calendar
          mode="single"
          selected={new Date(strings.eventDate)}
          className="border rounded-md flex flex-col items-center"
          fromDate={new Date(strings.eventDate)}
          toDate={new Date(strings.eventDate)}
          defaultMonth={new Date(strings.eventDate)}
          ISOWeek
        /> */}
        <div className="mt-4">
          <Button
            type="button"
            variant={"outline"}
            className="w-full"
            onClick={openGoogleMaps}
          >
            <MapPin />
            {strings.viewOnMapButton}
          </Button>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="">
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
        <div className="">
          <Label htmlFor="accompany">{strings.accompanyLabel}</Label>
          <Input
            id="accompany"
            value={accompany || ""}
            onChange={(e) => setAccompany(e.target.value)}
          />
        </div>
        <div className="">
          <Label>{strings.rsvpLabel}</Label>
          <RadioGroup value={attendance} onValueChange={setAttendance}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">{strings.yesOption}</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">{strings.noOption}</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex justify-between">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : strings.submitButton}
          </Button>
          <Button variant={"secondary"}>
            <Link href={"/"}>Back</Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RSVPForm;
