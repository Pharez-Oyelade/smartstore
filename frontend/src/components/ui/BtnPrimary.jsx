import React from "react";
import { Plus } from "lucide-react";

const BtnPrimary = ({ text, type = "button", onClick }) => {
  return (
    <div>
      <button type={type} className="btn-primary truncate" onClick={onClick}>
        {text} <Plus className="inline-block ml-2" />
      </button>
    </div>
  );
};

export default BtnPrimary;
