import { GetUserData } from "api/auth";
import React, { useEffect, useState } from "react";
import { ProfileAttributes } from "types/response.types";

function ProfileCard() {
  const [data, setData] = useState<ProfileAttributes>({
    email: "",
    fullname: "",
    image: "",
  });

  useEffect(() => {
    GetUserData()
      .then((res) => setData(res.data))
      .catch((err) => console.log("Error"))
      .finally(() => {});
  }, []);

  return (
    <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
      <img
        className="w-32 h-32 rounded-full mx-auto"
        src={data.image || "https://picsum.photos/200"}
        alt="Profile picture"
      />
      <h2 className="text-center text-2xl font-semibold mt-3">
        {data.fullname}
      </h2>
      <p className="text-center text-gray-600 mt-1">{data.email}</p>
    </div>
  );
}

export default ProfileCard;
