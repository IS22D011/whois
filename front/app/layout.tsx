'use client';

import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) 


{
  useEffect(() => {
    const name = document.getElementById("name");
    if (name) {
      name.textContent = "sarnai";
    }
  }, []);

  return (
    <html lang="en">
      <body>
        <p>enol footer</p>
        {children}
      </body>
    </html>
  );
}
