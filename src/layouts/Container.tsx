import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return <div className={`flex gap-[1rem] ${className ?? ""}`}>{children}</div>;
};

export default Container;
