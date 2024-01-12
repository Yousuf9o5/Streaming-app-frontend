import React from "react";
import { Nodes } from "types/react.types";
import { useEffect } from "react";
import { useRouter } from "next/router";

type Props = {
  children: Nodes;
};

function Authentication({ children }: Props) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("login");
    }
  }, []);

  return <>{children}</>;
}

export default Authentication;
