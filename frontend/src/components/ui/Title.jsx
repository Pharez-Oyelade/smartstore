import React from "react";
import BtnPrimary from "./BtnPrimary";

const Title = ({ onClick, text, header, description }) => {
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-extrabold">{header}</h1>
        <p className="text-slate-500 text-sm">{description}</p>
      </div>
      <BtnPrimary onClick={onClick} text={text} />
    </header>
  );
};

export default Title;
