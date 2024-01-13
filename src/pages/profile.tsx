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
        setMovies({ ...res.data.data.myMovies });
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
        <h2 className="text-center text-2xl font-semibold mt-3">John Doe</h2>
        <p className="text-center text-gray-600 mt-1">Software Engineer</p>
        <div className="flex justify-center mt-5">
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
            Twitter
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
            LinkedIn
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
            GitHub
          </a>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold">Bio</h3>
          <p className="text-gray-600 mt-2">
            John is a software engineer with over 10 years of experience in
            developing web and mobile applications. He is skilled in JavaScript,
            React, and Node.js.
          </p>
        </div>
      </div>
      <section className="py-10 bg-gray-100 grid grid-col-6">
        {movies.map((item) => (
          <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 bg-secondary-theme">
            <a href="#">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <img src={item} alt="Hotel Photo" />
                <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>

                  <button className="text-sm">Add to cart</button>
                </div>
              </div>

              <div className="mt-1 p-2">
                <h2 className="text-slate-700">Adobe Photoshop CC 2022</h2>
                <p className="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                <div className="mt-3 flex items-end justify-between">
                  <p className="text-lg font-bold text-blue-500">$850</p>

                  <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <button className="text-sm">Add to cart</button>
                  </div>
                </div>
              </div>
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Profile;
