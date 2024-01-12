import { LoginApi } from "api/auth";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FormFunction, InputFunction } from "types/function.types";
import { LoginFields } from "types/request.types";

function useLogin() {
  const router = useRouter();
  const [data, setData] = useState<LoginFields>({
    password: "",
    username: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const onChange: InputFunction = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit: FormFunction = (e) => {
    e.preventDefault();

    //TODO: Update Params Types
    const onThen = (data: any) => {
      localStorage.setItem("token", data?.token);
      router.push("/");
    };

    const onCatch = (err: any) => {
      setErrMsg("NO!");
    };

    const onFinally = () => setIsLoading(false);

    LoginApi(data).then(onThen).catch(onCatch).finally(onFinally);
  };

  return { onChange, errMsg, handleSubmit, isLoading };
}

export default useLogin;
