"use client";

import { Button } from "@nextui-org/react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const theme = localStorage.getItem("token") as string;

    const html = document.querySelector("html")!;
    const { dataset } = html;

    if (!theme) {
      localStorage.setItem("theme", "light");
    }

    html.setAttribute("data-theme", theme || "light");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant="light">Press me</Button>
    </main>
  );
}
