import { io } from "socket.io-client";
import { Apis } from "./api";

export const socket = io(Apis.root);
