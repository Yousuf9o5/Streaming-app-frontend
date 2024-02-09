import { Link } from "@nextui-org/react";
import Header from "components/Header";
import MovieCard from "components/MovieCard";
import ProfileCard from "components/ProfileCard";
import useGetUserMovies from "hooks/useGetUserMovies";
import useLocaleStorage from "hooks/useLocaleStorage";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ButtonFunction } from "types/function.types";

function Profile() {
  const setToken = useLocaleStorage("token")[1];
  const router = useRouter();
  const { movies } = useGetUserMovies();

  const handleLogout: ButtonFunction = () => {
    setToken("");
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div className="w-screen flex-col">
      <Header />
      <ProfileCard />
      <div className="header">
        <h1 className="text-center text-h1">Movies to watch</h1>
      </div>
      <section className="py-10 bg-gray-100 grid grid-cols-3 gap-4 w-[70dvw] m-auto">
        {movies?.map((item) => (
          <MovieCard
            movieId={item.id}
            roomId={item.roomId}
            name={item.name}
            desc={item.desc}
            url={item.url}
            key={item.id}
          />
        ))}
      </section>
    </div>
  );
}

export default Profile;
