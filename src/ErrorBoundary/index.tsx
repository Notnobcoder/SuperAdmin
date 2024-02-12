"use client";
import React, { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

function fallbackRender({ error }: { error: any }) {
  return (
    <div
      role="flex"
      className="flex items-center justify-center flex-col h-screen"
    >
      <p className="text-4xl">Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

export const ErrorComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary fallbackRender={fallbackRender}>{children}</ErrorBoundary>
  );
};
