import React, { useEffect, useState } from "react";
import TopBarBL from "../components/TopBarBL";
import PlayerCard from "../components/PlayerCard";
import AddPlayerCard from "../components/AddPlayerCard";
import PlayerCreationModal from "../components/PlayerCreationModal";
import PlayerModal from "../components/PlayerModal";

const HomePage = () => {
  const [modal, setModal] = useState(false)
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/blplayers')
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.error('Erro ao buscar usuários:', err));
  }, []);

  const alterModal = () => {
    setModal(!modal);
  }

  return (
    <>
      <TopBarBL />
      <div className="min-h-screen bg-[#101010] flex justify-center">
        <div className="max-w-[860px] h-max-[250px] h-[250px] h-min-[250px] w-full grid grid-cols-2 md:grid-cols-4 gap-5 pt-6">
          {players.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
          <button onClick={alterModal} className="contents">
            <AddPlayerCard/>
          </button>
        </div>
      </div>
          
      <PlayerModal open={modal} onClose={alterModal}>
        <PlayerCreationModal players={players} />
      </PlayerModal>
    </>
  );
}

export default HomePage;