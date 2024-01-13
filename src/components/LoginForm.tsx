import { Button, Input, Spinner } from "@nextui-org/react";
import useLogin from "hooks/useLogin";
import React, { useState } from "react";

function LoginForm() {
  const { errMsg, handleSubmit, isLoading, onChange } = useLogin();

  return (
    <form
      className="relative flex-1 m-auto flex flex-col gap-3 w-[60%]"
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
          type="text"
          name="username"
          variant="bordered"
          color="primary"
          size="lg"
          placeholder="username"
          onChange={onChange}
        />
        <Input
          type="password"
          name="password"
          variant="bordered"
          color="primary"
          size="lg"
          placeholder="********"
          onChange={onChange}
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
    </form>
  );
}

export default LoginForm;