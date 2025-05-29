import React from "react";

const PlayerCreationModal = ({ players = [] }) => {
  return (
    <>
      <div className="text-white text-lg font-semibold mb-6">Lista de Jogadores</div>
      <div className="w-full flex flex-col gap-6">
        {players.map((player) => (
          <div key={player.id} className="bg-white rounded-md p-6 shadow flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <div className="text-[#1046A9] font-bold text-xl">{player.name}</div>
              <div className="text-gray-700">ID: {player.id}</div>
              {player.height && <div className="text-gray-700">Posição: {player.height}</div>}
              {player.age && <div className="text-gray-700">Idade: {player.age}</div>}
            </div>
            {player.imageUrl && (
              <img src={`/src/assets/Profiles/${player.imageUrl}`} alt={player.name} className="w-24 h-24 object-cover" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default PlayerCreationModal;