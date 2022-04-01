import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="flex flex-col">
      <div className="h-full flex items-center">
        <input type="text" disabled name="pass" placeholder="  Password" className="drop-shadow h-1/2 w-2/3 sm:h-20 rounded-xl"/>
        <img src="copy_icon.png" alt="" className="w-10 h-10 mx-2 cursor-pointer" />
      </div>
      <div className="slider">
        <input type="range" name="slider" id="s1" min="6" max="32"/>
      </div>
      <div className="pt-3">
        <label className="flex mt-2 mb-4">
          <input type="checkbox" name="checkbox" id="cb1"/>
          <b>Include Symbols</b> (@#$%)
        </label>
        <label className="flex mt-2 mb-4">
          <input type="checkbox" name="checkbox" id="cb2" className="h-5 w-5"/>
          <b>Include Numbers</b> (1234)
        </label>
        <label className="flex mt-2 mb-4">
          <input type="checkbox" name="checkbox" id="cb3" className="h-5 w-5"/>
          <b>Include Lowercase Characters </b>(abcd)
        </label>
        <label className="flex mt-2 mb-4">
          <input type="checkbox" name="checkbox" id="cb4" className="h-5 w-5"/>
          <b>Include Uppercase Characters </b> (ABCD)
        </label>
      </div>
    </div>
  );
};

export default Homepage;
