import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

function LoginForm() {
  return (
    <form action="">
      {/* logo */}
      <div className="">
        <Image src={""} alt="" />
      </div>
      {/* inputs fields */}
      <div className="">
        <input type="text" />
        <input type="text" />
      </div>
      {/* buttons */}
      <Button>Login</Button>
    </form>
  );
}

export default LoginForm;
