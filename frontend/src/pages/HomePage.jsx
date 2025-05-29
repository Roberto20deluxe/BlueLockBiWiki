import React, { useEffect, useState } from "react";
import TopBarBL from "../components/TopBarBL";
import PlayerCard from "../components/PlayerCard";

const mockPlayers = [
  { id: 1, name: "Isagi Yoichi" },
  { id: 2, name: "Bachira Meguru" },
  { id: 3, name: "Nagi Seishiro" },
  { id: 4, name: "Chigiri Hyoma" },
  { id: 5, name: "Kunigami Rensuke" },
  { id: 6, name: "Barou Shoei" },
  { id: 7, name: "Reo Mikage" },
  { id: 8, name: "Tokimitsu Aoshi" },
  { id: 9, name: "Aryu Jyubei" },
  { id: 10, name: "Gagamaru Gin" },
  { id: 11, name: "Sae Itoshi" },
  { id: 12, name: "Rin Itoshi" },
  { id: 13, name: "Hiori Yo" },
  { id: 14, name: "Naruhaya Asahi" }
];

const HomePage = () => {
  const [players, setPlayers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/blplayers')
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.error('Erro ao buscar usuários:', err));
  }, []);

  return (
    <>
      <TopBarBL />
      <div className="min-h-screen bg-[#101010] flex justify-center">
        <div className="max-w-[860px] h-max-[250px] h-[250px] h-min-[250px] w-full grid grid-cols-2 md:grid-cols-4 gap-5 pt-6">
          {players.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;