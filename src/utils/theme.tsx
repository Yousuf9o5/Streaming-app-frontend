import { themeState } from "atoms/theme";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Nodes } from "types/react.types";

type Props = {
  children: Nodes;
};

function Theme({ children }: Props) {
  /**
   *
   * @Theme Provider
   *
   */

  const theme = useRecoilValue(themeState);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const root = document.documentElement;

    if (!theme) {
      localStorage.setItem("theme", "light");
    }

    root.setAttribute("data-theme", theme as string);
  }, [theme]);

  return <>{children}</>;
}

export default Theme;
