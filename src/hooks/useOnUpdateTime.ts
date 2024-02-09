import { useEffect, useRef, useState } from "react";
import { Video } from "types/elements.types";
import socket from "../socket";
import { useRouter } from "next/router";

function useOnUpdateTime(url: string) {
  const [incomeTime, setIncomeTime] = useState<number>(0);
}

export default useOnUpdateTime;
