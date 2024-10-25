import React from "react";
import { LabeledInput, Button } from "../components/Elements";
import AuthLayout from "../components/Layouts/AuthLayout";

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
  };

  return (
    <AuthLayout>
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password?</h2>
        <p className="text-center text-gray-500 mb-4">
          Enter your email address to get a password reset link.
        </p>
        <form onSubmit={handleSubmit}>
          <LabeledInput
            label="Email Address"
            id="email"
            type="email"
            placeholder="hello@example.com"
            required
          />
          <Button type="submit" className="w-full mt-4">
            Reset Password
          </Button>
        </form>
        <div className="mt-6 text-center">
          <a href="/signIn" className="text-teal-600 hover:text-teal-700">
            Back to Sign In
          </a>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
