import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";

const Header = () => {
  return (
    <>
      <TopHeader />
      <div className=" sticky top-0 bg-white z-50">
        <BottomHeader />
      </div>
    </>
  );
};

export default Header;
