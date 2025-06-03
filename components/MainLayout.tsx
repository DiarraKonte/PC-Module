"use client";

import { usePathname } from "next/navigation";
import { AuthProvider } from "@/lib/AuthContext";
import Footer from "@/components/footer/Footer";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showFooter = !pathname.startsWith("/modules");

  return (
    <>
      <AuthProvider>{children}</AuthProvider>
      {showFooter && <Footer />}
    </>
  );
}
