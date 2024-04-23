import React from "react";
import NavigatorButton from "./NavigatorButton";

export default function NavBar() {
  return (
    <div className="flex justify-between bg-zinc-400 w-screen">
      <div className=" flex justify-start">
        <NavigatorButton to="/" title="Home" />
        <NavigatorButton to="/posts" title="Posts" />
      </div>

      <div className="flex ">
        <button className="mx-10">Language</button>
        <button className="mx-10">🌚</button>
      </div>
    </div>
  );
}
