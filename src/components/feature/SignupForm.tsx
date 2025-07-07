"use client";
import React from "react";
import { Input } from "../ui/input";
import { FormContainer } from "../common/FormContainer";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import Link from "next/link";

export const SignUpForm: React.FC = () => {
  // State variables for email, password, error message, and loading state
  // These will be used to manage the form input and submission process
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // useRouter hook from Next.js to programmatically navigate after successful login
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error message

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true); // Set loading state to true while processing login
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError(result.error);
      } else if (result?.ok) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <FormContainer
      title="Sign In"
      description="Please enter your credentials to sign up."
      onSubmit={handleSubmit}
      error={error || null}
      buttonTitle="Sign In"
    >
      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>
        <Input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder="Confirm your password"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <Button type="submit" disabled={loading} size={"full"}>
        {loading ? <Loader className="animate-spin text-white" /> : "Sign Up"}
      </Button>

      <div className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link href="/signin" className="text-blue-500 hover:underline">
          Sign In
        </Link>
      </div>
    </FormContainer>
  );
};
export default SignUpForm;
