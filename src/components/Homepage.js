import React, { useState } from "react";
import "./Homepage.css";

function Homepage() {
  const [InputValue, setInputValue] = useState("0");
  function getValue(event) {
    setInputValue(event.target.value);
  }

  const allCapsAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"];
  const allUniqueChars = [..."~!@#$%^&*()_+-=[]\\{}|;:'\",./<>?"];
  const allNumbers = [..."0123456789"];

  const base = [
    ...allCapsAlpha,
    ...allNumbers,
    ...allLowerAlpha,
    ...allUniqueChars,
  ];

  const generator = (base, len) => {
    return [...Array(len)]
      .map((i) => base[(Math.random() * base.length) | 0])
      .join("");
  };

  function a() {
    var string = (generator(base, parseInt(InputValue)));
    return { __html: string <= 0 ? "" : string }
  }


  const handleCopy = () => {
    var text = document.getElementById("myText");
    var copy = text.textContent;
    if (copy !== "") navigator.clipboard.writeText(copy);
    document.getSelection().removeAllRanges();
  }

  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked)
  };

  return (
    <div className="flex flex-col">
      <div className="h-full flex items-center">
        <span
          id="myText"
          className="min-w-full h-16 bg-white shadow-[
#e1ece4] rounded-xl font-noto-sans" dangerouslySetInnerHTML={a()}
        >
        </span>
        <img
          src="copy_icon.png"
          alt=""
          className="w-10 h-max mx-2 cursor-pointer"
          onClick={handleCopy}
        />
      </div>
      <div className="slider">
        <input
          type="range"
          name="slider"
          id="s1"
          min="0"
          max="32"
          defaultValue="0"
          step="1"
          onChange={getValue}
        />
        <label id="display_range" className="text-lg m-2 font-noto-sans">
          {InputValue} Characters
        </label>
      </div>
      <div className="pt-3">
        <label className="flex mt-2 mb-4 font-noto-sans">
          <input type="checkbox" name="checkbox" id="cb1" checked={isChecked} onChange={handleOnChange} />
          <b>Include Symbols</b>&nbsp; (@#$%)
        </label>
        <label className="flex mt-2 mb-4 font-noto-sans">
          <input type="checkbox" name="checkbox" id="cb2" className="h-5 w-5" />
          <b>Include Numbers</b> &nbsp; (1234)
        </label>
        <label className="flex mt-2 mb-4 font-noto-sans">
          <input type="checkbox" name="checkbox" id="cb3" className="h-5 w-5" />
          <b>Include Lowercase Characters </b> &nbsp; (abcd)
        </label>
        <label className="flex mt-2 mb-4 font-noto-sans">
          <input type="checkbox" name="checkbox" id="cb4" className="h-5 w-5" />
          <b>Include Uppercase Characters </b> &nbsp; (ABCD)
        </label>
      </div>
    </div>
  );
}

export default Homepage;
