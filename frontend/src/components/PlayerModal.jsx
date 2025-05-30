import React from "react";
import AddIcon from '../assets/General-Icons/addIcon.png';

const PlayerModal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/65" onClick={onClose} />
      <div className="relative bg-[#1046A9] rounded-[10px] p-8 shadow-lg w-[900px] h-[750px] flex flex-col items-center overflow-y-auto">
        <button className="absolute top-2 right-2" onClick={onClose}>
          <img src={AddIcon} className="w-[30px] h-[30px] hover:cursor-pointer" alt="Fechar"/>
        </button>
        {children}
      </div>
    </div>
  );
};

export default PlayerModal;
