import React from "react";
import searchIcon from '../assets/General-Icons/searchIcon.png';
import userIcon from '../assets/General-Icons/userIcon.png';

const TopBarBL= () => {
  return (
    <>
    <div className="h-[70px] bg-[#3B82F6] grid grid-cols-[250px_1fr_250px] items-center">
      {/* Caixa preta extrema esquerda */}
      <div className="flex items-center flex-1">
        <div className="bg-black w-full h-[70px] ml-4"></div>
      </div>
      {/* Search bar centralizada */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-[860px]">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <img src={searchIcon} alt="search icon" className="w-5 h-5 object-contain" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-[40px] pl-10 pr-4 rounded-[24px] text-base bg-[#FFFFFF] text-[#1046A9] placeholder-[#1046A9] focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
          />
        </div>
      </div>
      {/* userIcon extrema direita */}
      <div className="flex items-center justify-end flex-1 mr-12">
        <img src={userIcon} alt="user icon" className="w-12 h-12 object-contain" />
      </div>
    </div>
    </>
  );
}

export default TopBarBL;