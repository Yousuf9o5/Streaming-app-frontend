import { useRouter } from "next/router";
import React from "react";

function Blog() {
  const router = useRouter();
  return <div>{router.query.id}</div>;
}

export default Blog;
