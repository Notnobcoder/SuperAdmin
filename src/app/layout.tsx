"use client";
import { ErrorComponent } from "@/ErrorBoundary";
import "./globals.css";
import { Poppins, Manrope } from "next/font/google";
export const revalidate = 1;

import React from "react";
import AuthProvider from "@/context/AuthProvider";
import StyledComponentsRegistry from "./lib/registry";
import AppProvider from "@/context/AppProvider";
import "react-toastify/dist/ReactToastify.css";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ErrorComponent>
        <AuthProvider>
          <AppProvider>
            <StyledComponentsRegistry>
              <body className={`${inter.className} ${manrope.className}`}>
                {children}
              </body>
            </StyledComponentsRegistry>
          </AppProvider>
        </AuthProvider>
      </ErrorComponent>
    </html>
  );
}
