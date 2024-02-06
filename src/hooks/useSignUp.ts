import Cookies from "js-cookie";
import { SignUp } from "api/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FormFunction, InputFunction } from "types/function.types";

function useSignUp() {
  const router = useRouter();
  const [data, setData] = useState({} as any);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      router.push("/");
    }
  }, []);

  const onChange: InputFunction = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit: FormFunction = (e) => {
    e.preventDefault();
    setIsLoading(true);

    //TODO: Update Params Types
    const onThen = (data: any) => {
      Cookies.set("token", data?.token);
      router.push("/");
    };

    const onCatch = (err: any) => {
      setErrMsg("NO!");
    };

    const onFinally = () => setIsLoading(false);

    SignUp(data).then(onThen).catch(onCatch).finally(onFinally);
  };

  return { onChange, errMsg, handleSubmit, isLoading };
}

export default useSignUp;
