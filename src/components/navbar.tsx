import React from "react";
import HideAmountsToggle from "./hide-amounts-toggle";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between items-baseline px-4">
      <div />
      <h1 className="text-4xl px-0 pt-8 pb-6 text-white">Dashboard</h1>
      <HideAmountsToggle />
    </div>
  );
};

export default Navbar;
