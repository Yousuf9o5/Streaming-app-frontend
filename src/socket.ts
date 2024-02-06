import { io } from "socket.io-client";
import { Apis } from "./api/URLS";

export const socket = io(Apis.root);
