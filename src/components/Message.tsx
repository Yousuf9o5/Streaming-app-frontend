import React from "react";
import { blankImg } from "utils/other";

type Props = {
  msg: string;
  img?: string;
  name: string;
  date?: string;
};

function Message(props: Props) {
  const { img, msg, name, date } = props;

  return (
    <div className="flex gap-4 w-full">
      <div className="w-[50px] h-[50px] outline outline-1 outline-offset-1 rounded-full overflow-hidden grid place-items-center">
        <img
          src={img || blankImg}
          alt="profile-img"
          className="w-[110%] h-[110%] object-cover"
        />
      </div>
      <div className="text flex flex-col">
        <span>{name}</span>
        <span>{msg}</span>
      </div>
    </div>
  );
}

export default Message;
