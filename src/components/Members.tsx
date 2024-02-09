import { getRoomMembers } from "api/room";
import React, { useEffect, useState } from "react";
import { UserAttributes } from "types/response.types";

type Props = {
  data: string[];
};

const Members = React.forwardRef(function Members(
  { data }: Props,
  ref: React.LegacyRef<HTMLDivElement>
) {
  const [members, setMembers] = useState<UserAttributes[]>([]);

  useEffect(() => {
    getRoomMembers(data)
      .then((res) => setMembers([...res.data]))
      .catch((e) => console.log("Error while fetching Members", e));
  }, [data]);

  return (
    <div
      ref={ref}
      className="bg-secondary-theme opacity-0 transition-opacity absolute inset-0 flex flex-col gap-4 h-full rounded-xl shadow-medium"
    >
      members:
      {members.map((member) => (
        <div>
          <h2 className="text-h2">{member.email}</h2>
          <h2 className="text-h2">{member.fullname}</h2>
        </div>
      ))}
    </div>
  );
});

export default Members;
