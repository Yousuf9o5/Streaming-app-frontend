import { Link } from "@nextui-org/react";
import { Apis } from "api/index";
import axios, { AxiosRequestConfig } from "axios";
import Header from "components/Header";
import useLocaleStorage from "hooks/useLocaleStorage";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ButtonFunction } from "types/function.types";

function Profile() {
  const [data, setData] = useState({} as any);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const setToken = useLocaleStorage("token")[1];
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);

    const config: AxiosRequestConfig = {
      method: "get",
      url: Apis.showMovies,
    };

    axios(config)
      .then((res) => {
        setData({ ...res.data.data.myMovies[0].owner });
        setMovies([...res.data.data.myMovies] as any);
      })
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, []);

  const handleLogout: ButtonFunction = () => {
    setToken("");
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div className="w-screen flex-col">
      <Header />
      <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <img
          className="w-32 h-32 rounded-full mx-auto"
          src="https://picsum.photos/200"
          alt="Profile picture"
        />
        <h2 className="text-center text-2xl font-semibold mt-3">
          {data.displayName}
        </h2>
        <p className="text-center text-gray-600 mt-1">{data.email}</p>

        <div className="mt-5">
          <h3 className="text-xl font-semibold">Bio</h3>
          <p className="text-gray-600 mt-2">
            {data.displayName} is a software engineer with over 10 years of
            experience in developing web and mobile applications. He is skilled
            in JavaScript, React, and Node.js.
          </p>
        </div>
      </div>
      <div className="header">
        <h1 className="text-center text-h1">Movies to watch</h1>
      </div>
      <section className="py-10 bg-gray-100 grid grid-cols-4 gap-4 w-[70dvw] m-auto">
        {movies?.map((item: any) => (
          <article
            className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 bg-secondary-theme"
            key={item._id}
          >
            <Link href={`/room/${item._id}`} className="w-full h-full">
              <div className="mt-1 p-2">
                <h2 className="text-slate-700">{item.movieName}</h2>
                <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Profile;
