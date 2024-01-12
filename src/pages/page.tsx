import React from "react";
import { useRecoilState } from "recoil";
import { userState } from "atoms/user";

function Page() {
  const [user, setUser] = useRecoilState(userState);

  return <div></div>;
}

export default Page;
