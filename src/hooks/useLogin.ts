import { LoginApi } from "api/auth";
import { userState } from "atoms/user";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { FormFunction, InputFunction } from "types/function.types";
import { LoginFields } from "types/request.types";

//todo:
function useLogin() {
  const router = useRouter();
  // const [user, setUser] = useRecoilState(userState);
  const [data, setData] = useState<LoginFields>({
    password: "",
    username: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/");
    }
  }, []);

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
