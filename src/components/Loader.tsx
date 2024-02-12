import React from "react";
import { ImSpinner8 } from "react-icons/im";

export default function Loader({
  loading,
  size = "md",
}: {
  loading: boolean;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <>
      {loading && (
        <div className="m-auto text-center my-5 absolute top-1/2 -translate-y-1/2 left-0 right-0">
          {/* <Spinner className="m-auto" size="lg" /> */}
          <ImSpinner8
            className={`animate-spin text-primary m-auto ${
              size === "sm"
                ? "text-2xl"
                : size === "md"
                ? "text-4xl"
                : size === "lg"
                ? "text-5xl"
                : "4xl"
            }`}
          />
        </div>
      )}
    </>
  );
}
