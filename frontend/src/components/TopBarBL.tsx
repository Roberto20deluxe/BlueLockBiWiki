import React from "react";
import searchIcon from '../assets/General-Icons/searchIcon.png';
import userIcon from '../assets/General-Icons/userIcon.png';
import BlueLockLogo from '../assets/General-Icons/BlueLockLogo.svg'
import api from "../services/api";
import { Link } from "react-router-dom";
import { useAuth } from "../services/useAuth";

const TopBarBL= () => {

  const handleLogOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    const refreshToken = useAuth.getRefreshToken();
    if (!refreshToken) {
      useAuth.logout();
      return;
    }
    
    try {
      const response = await api.post('/logout', { token: refreshToken });
      if (response.status !== 203) throw new Error("Algo deu errado ao tentar deslogar");
      
      useAuth.logout(); 
    } catch (error) {
      console.error('Erro no logout:', error);
      useAuth.logout();
    }
  };

  return (
    <>
    <div className="h-[80px] bg-[#3B82F6] grid grid-cols-[250px_1fr_250px] items-center">
      {/* Simbolo Blue Lock */}
      <Link to={`/`}>
        <button className="flex items-center justify-center flex-1">
          <img src={BlueLockLogo} className="h-[80px] w-[170px] ml-4 hover:cursor-pointer"/>
        </button>
      </Link>
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
      {/* Log out button and userIcon extrema direita */}
      <div className="flex items-center justify-end flex-1 mr-12 gap-4">
        <button onClick={handleLogOut} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          Log out
        </button>
        <Link to={`/login`}>
          <img src={userIcon} alt="user icon" className="w-12 h-12 object-contain hover:cursor-pointer" />
        </Link>
      </div>
    </div>
    </>
  );
}

export default TopBarBL;