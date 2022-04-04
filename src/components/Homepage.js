import React, { useState } from "react";
import "./Homepage.css";
import copy_clipboard from "./copy_icon.png";

function Homepage() {
  const [inputValue, setInputValue] = useState("0");
  function getValue(event) {
    setInputValue(event.target.value);
  }

  const allCapsAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"];
  const allUniqueChars = [..."~!@#$%^&*()_+-=[]\\{}|;:'\",./<>?"];
  const allNumbers = [..."0123456789"];

  const [base, setBase] = useState([]);
  // console.log(base);

  const handleCopy = () => {
    var text = document.getElementById("myText");
    var copy = text.textContent;
    if (copy !== "") navigator.clipboard.writeText(copy);
    document.getSelection().removeAllRanges();
  };

  // const [isChecked, setIsChecked] = useState(false);


  // const handleOnChange = () => {
  //   setIsChecked(!isChecked);
  //   console.log(isChecked);
  // };

  const generator = (base, len) => {
    return [...Array(len)]
      .map((i) => base[(Math.random() * base.length) | 0])
      .join("");
  };


  function a() {
    var string = generator(base, parseInt(inputValue));
    return { __html: string <= 0 ? "" : string };
  }

  var checkboxes = document.querySelectorAll("input[type=checkbox]");

  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].onclick = isChecked;
  }

  function isChecked(event) {
    var checkbox = event.target;
    if (checkbox.checked === true) { addElementsInArray(checkbox.id); }
    if (checkbox.checked === false) { removeElements(checkbox) }
  }

  function addElementsInArray(id) {
    if (id === "cb1") {
      setBase(base => [...base, ...allUniqueChars]);
    }
    if (id === "cb2") {
      setBase(base => [...base, ...allNumbers]);
    }
    if (id === "cb3") {
      setBase(base => [...base, ...allLowerAlpha]);
    }
    if (id === "cb4") {
      setBase(base => [...base, ...allCapsAlpha]);
    }
  }

  function removeElements(e) {
    console.log(e)
  }


  return (
    <div className="flex flex-col">
      <div className="h-full flex items-center">
        <span
          id="myText"
          className="min-w-full h-20 bg-white drop-shadow-xl rounded-xl leading-loose pl-6 whitespace-pre-line font-noto-sans"
          dangerouslySetInnerHTML={a()}
        ></span>
        <img
          src={copy_clipboard}
          alt=""
          className="w-10 h-max mx-2 cursor-pointer bg-inherit"
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
          {inputValue} Characters
        </label>
      </div>
      <div className="pt-3">
        <label className="flex mt-2 mb-4 font-noto-sans">
          <input
            type="checkbox"
            name="checkbox"
            id="cb1"
            onChange={isChecked}
          />
          <b>Include Symbols</b>&nbsp; (@#$%)
        </label>
        <label className="flex mt-2 mb-4 font-noto-sans">
          <input type="checkbox" name="checkbox" id="cb2" className="h-5 w-5" onChange={isChecked} />
          <b>Include Numbers</b> &nbsp; (1234)
        </label>
        <label className="flex mt-2 mb-4 font-noto-sans">
          <input type="checkbox" name="checkbox" id="cb3" className="h-5 w-5" onChange={isChecked} />
          <b>Include Lowercase Characters </b> &nbsp; (abcd)
        </label>
        <label className="flex mt-2 mb-4 font-noto-sans">
          <input type="checkbox" name="checkbox" id="cb4" className="h-5 w-5" onChange={isChecked} />
          <b>Include Uppercase Characters </b> &nbsp; (ABCD)
        </label>
      </div>
    </div>
  );
}

export default Homepage;
