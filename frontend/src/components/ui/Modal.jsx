import React from "react";
import { MoveLeft } from "lucide-react";

const Modal = ({ children, onClose, closeText }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200 z-20 left-40">
      <div className="w-[60%] relative">
        {children}
        <button
          onClick={onClose}
          className="absolute top-0 left-2 text-slate-400 hover:text-slate-600"
        >
          <div className="flex items-center gap-2">
            <MoveLeft size={20} />
            <span>{closeText}</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Modal;
