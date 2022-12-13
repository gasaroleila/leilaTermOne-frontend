import React from "react";
import "./styles/Buttons.css";
// import CALCULATOR_BUTTONS from "./CalculatorButtons";

const Buttons = ({ inputHandler, clearInput, backspace, changePlusMinus, calculateAns }) => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("equalbtn").click();
    }
  });

  return (
    <div className="show-btn">
      <button className="btn exp btn-1" onClick={inputHandler}>
        ^
      </button>
      <button className="btn exp btn-2" onClick={inputHandler}>
        (
      </button>
      <button className="btn exp btn-3" onClick={inputHandler}>
        )
      </button>
      <button className="btn exp btn-4" onClick={inputHandler}>
        √
      </button>
      <button className="btn exp btn-5" onClick={inputHandler}>
        x<sup>2</sup>
      </button>
      <button className="btn clr btn-6" onClick={clearInput}>
        AC
      </button>
      <button className="btn clr btn-7" onClick={backspace}>
        ⌫
      </button>
      <button className="btn exp btn-8" onClick={inputHandler}>
        log
      </button>
      <button className="btn exp btn-9" onClick={inputHandler}>
        ÷
      </button>
      <button className="btn exp btn-10" onClick={inputHandler}>
        %
      </button>
      <button className="btn btn-11" onClick={inputHandler}>
        7
      </button>
      <button className="btn btn-12" onClick={inputHandler}>
        8
      </button>
      <button className="btn btn-13" onClick={inputHandler}>
        9
      </button>
      <button className="btn exp btn-14" onClick={inputHandler}>
        x
      </button>
      <button className="btn exp btn-15" onClick={inputHandler}>
        x<sup>3</sup>
      </button>
      <button className="btn btn-16" onClick={inputHandler}>
        4
      </button>
      <button className="btn btn-17" onClick={inputHandler}>
        5
      </button>
      <button className="btn btn-18" onClick={inputHandler}>
        6
      </button>
      <button className="btn exp btn-19"  onClick={inputHandler}>
        -
      </button>
      <button className="btn exp btn-20" onClick={inputHandler}>
        <sup>3</sup>√
      </button>
      <button className="btn btn-21" onClick={inputHandler}>
        1
      </button>
      <button className="btn btn-22" onClick={inputHandler}>
        2
      </button>
      <button className="btn btn-23" onClick={inputHandler}>
        3
      </button>
      <button className="btn exp btn-24" onClick={inputHandler}>
        +
      </button>
      <button className="btn exp btn-25" onClick={inputHandler}>
        !
      </button>
      <button className="btn exp btn-26" onClick={changePlusMinus}>
        ±
      </button>
      <button className="btn btn-27" onClick={inputHandler}>
        0
      </button>
      <button className="btn exp btn-28" onClick={inputHandler}>
        .
      </button>
      <button className="btn exp equal btn-29" id="equalbtn" onClick={calculateAns}>
        =
      </button>
    </div>
  );
};

export default Buttons;
