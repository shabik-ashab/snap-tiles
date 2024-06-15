import React from "react";
import Search from "./Search";

export const Header = () => {
  return (
    <div className="navbar bg-neutral shadow-lg">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">SnapTiles</a>
        <Search />
      </div>
      
      <div className="flex-none  gap-2">   
      </div>
    </div>
  );
};
