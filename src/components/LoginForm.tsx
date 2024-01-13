import { Button, Input, Link, Spinner } from "@nextui-org/react";
import useLogin from "hooks/useLogin";
import { useRouter } from "next/router";
import React, { useState } from "react";

function LoginForm() {
  const router = useRouter();
  const { errMsg, handleSubmit, isLoading, onChange } = useLogin();

  return (
    <form
      className="relative flex-1 m-auto flex flex-col gap-3 w-[60%] min-w-[400px] py-10"
      onSubmit={handleSubmit}
    >
      {/* header */}
      <div className="absolute w-[150px] h-[150px] blur-[7rem] bg-primary opacity-[0.2] top-[20%] right-4"></div>
      <div className="relative z-2 text-center">
        <h1 className="text-h1">Hello Again</h1>
        <h4 className="text-h4">Welcome to our Stream Application</h4>
      </div>
      {/* inputs fields */}
      <div className="flex flex-col gap-3 my-[4rem]">
        <Input
          type="email"
          name="email"
          variant="bordered"
          color="primary"
          size="lg"
          placeholder="email"
          onChange={onChange}
          className="bg-secondary-theme"
        />
        <Input
          type="password"
          name="password"
          variant="bordered"
          color="primary"
          size="lg"
          placeholder="********"
          onChange={onChange}
          className="bg-secondary-theme"
        />
      </div>
      {/* buttons */}
      <Button
        variant="shadow"
        className="bg-primary text-white text-xl py-6"
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? <Spinner color="white" /> : "Login"}
      </Button>
      <div className="absolute right-0 top-0">
        <span>Don't have account </span>
        <Link href={"/register"} className="color-primary-theme">
          Register
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
