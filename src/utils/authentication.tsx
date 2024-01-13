import React from "react";
import { Nodes } from "types/react.types";
import { useEffect } from "react";
import { useRouter } from "next/router";

type Props = {
  children: Nodes;
};

export const unAuthPaths = ["/", "/login", "/register"];

function Authentication({ children }: Props) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const path = window.location.pathname;

    if (!token && !unAuthPaths.includes(path)) {
      router.push("login");
    }
  }, []);

  return <>{children}</>;
}

export default Authentication;
