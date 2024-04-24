import React from "react";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className=" flex flex-col justify-center items-center m-5 border">
        <div className="flex justify-center">
          <img
            className="rounded-full w-1/2"
            src="https://avatars.githubusercontent.com/u/81727184?v=4"
          />
        </div>
        <div className="m-5">
          <h1 className="text-xl text-center">Salut! Je suis Miuler</h1>
          <p className="m-5 border">
            I'm a frontend developer building React applications and Next.js
            projects. Wanna see my journey? You're at the right place.
          </p>
        </div>
      </div>
    </div>
  );
}
