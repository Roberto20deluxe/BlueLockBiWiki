import React from "react";
import AddIcon from '../assets/General-Icons/addIcon.png'

const AddPlayerCard = () => {
    return (
        <button className="h-[200px] w-[200px] bg-[#1046A9] hover:cursor-pointer hover:brightness-80 rounded-[30px] flex flex-col justify-center items-center">
            <img src={AddIcon} className="w-[180px] h-[180px]" />
        </button>
    );
}

export default AddPlayerCard;