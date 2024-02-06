import React from "react";
import { Nodes } from "types/react.types";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

type Props = {
  children: Nodes;
};

export const unAuthPaths = ["/", "/login", "/register"];

function Authentication({ children }: Props) {
  const router = useRouter();
  const token = Cookies.get("token");
  const path = router.pathname;

  useEffect(() => {
    // if (!token && !unAuthPaths.includes(path)) {
    //   router.push("/login");
    // }
  }, []);

  return <>{children}</>;
}

export default Authentication;
