import { io } from "socket.io-client";
import URLS from "./api/URLS";

const socket = io(URLS.root);

export default socket;
