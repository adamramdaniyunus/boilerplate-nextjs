// Form Container component
// This component is used to wrap form elements and provide a consistent layout and styling.
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircleIcon } from "lucide-react";

export interface FormContainerProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  onSubmit: (e: React.FormEvent) => void;
  error?: string | null;
  buttonTitle?: string;
  redirectUrl?: string;
  redirectText?: string;
  isLoading?: boolean;
}

export const FormContainer: React.FC<FormContainerProps> = ({
  children,
  title,
  description,
  onSubmit,
  error
}) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold">{title}</h2>
        {description && (
          <p className="mb-4 text-center text-gray-600">{description}</p>
        )}
        {/* Display error message if provided */}
        {/* This will show an alert if there is an error */}
        {/* You can customize the Alert component to fit your design */}
        {error && (
          <Alert className="mb-4" variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>Wrong Credentials</AlertTitle>
            <AlertDescription>
              {error}
            </AlertDescription>
          </Alert>
        )}
        <form onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
};
