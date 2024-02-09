import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { TokenData } from "types/other.types";

function useGetTokenData(): TokenData {
  const [tokenData, setIdTokenData] = useState<TokenData>({ id: "", exp: 0 });

  useEffect(() => {
    const token = localStorage.getItem("token")!;

    const decodedToken = jwtDecode(token) as TokenData;

    setIdTokenData(decodedToken);
  }, []);

  return tokenData;
}

export default useGetTokenData;
