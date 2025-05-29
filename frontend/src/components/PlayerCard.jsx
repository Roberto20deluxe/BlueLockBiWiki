import React from "react";
import NagiPFP from '../assets/Profiles/Nagi_PFP.png';


const PlayerCard = ({ player }) => {
  return (
    <button className="h-[200px] w-[200px] bg-[#FFFFFF] hover:cursor-pointer hover:brightness-80 rounded-[30px] flex flex-col justify-end text-white font-bold text-xl">
        <div className="items-center">
        <img
            src={`/src/assets/Profiles/${player.imageUrl}`}
            alt={player.name}
            className="w-[250px] h-[160px] object-contain mx-auto mt-2"
        />
        </div>
      <div className="h-[40px] min-h-[40px] max-h-[40px] w-[200px] bg-[#1046A9] flex items-center justify-center rounded-b-[24px] overflow-hidden">
        {player?.name || "Player"}
      </div>
    </button>
  );
}

export default PlayerCard;