"use client";

import { useEffect } from "react";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Ensure consistent hydration by removing client-only attributes
    const body = document.body;
    if (body.hasAttribute("cz-shortcut-listen")) {
      body.removeAttribute("cz-shortcut-listen");
    }
  }, []);

  return <>{children}</>;
}