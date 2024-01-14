import { LoginApi } from "api/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FormFunction, InputFunction } from "types/function.types";
import { LoginFields } from "types/request.types";
import Cookies from "js-cookie";

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
    const token = Cookies.get("token");

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

    LoginApi(data).then(onThen).catch(onCatch).finally(onFinally);
  };

  return { onChange, errMsg, handleSubmit, isLoading };
}

export default useLogin;
