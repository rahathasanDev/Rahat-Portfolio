import React from "react";

const Header = () => {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-5xl font-semibold">Rahat Hasan</h2>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
