import React, { useEffect, useState, useRef } from "react";
import api from "../services/api"
import TopBarBL from "../components/TopBarBL";
import PlayerCard from "../components/PlayerCard";
import AddPlayerCard from "../components/AddPlayerCard";  

const CharacterPage = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [BLplayers, setBLPlayers] = useState<any[]>([])
  const [chosenPlayer, setChosenPlayer] = useState<string>("")
  const [chosenPlayerDetails, setChosenPlayerDetails] = useState<any | null>(null)

  useEffect(() => {
    const fetchPlayers = async () => {
        try {
            const newPlayers = await api.get("/blplayers");
            setBLPlayers(newPlayers.data)
        } catch (err){
            console.log(err)
        }
    }; fetchPlayers();
    }, []);

  useEffect(() => {
    const fetchPlayerDetails = async () => {
        if (chosenPlayer) {
            try { 
                const info = await api.get(`/complete/${chosenPlayer}`);
                setChosenPlayerDetails(info.data)
            } catch (err) {
                console.log(err)
            }
    } else {
        setChosenPlayerDetails(null)
    };
    }; fetchPlayerDetails();
  }, [chosenPlayer])

  const handleCreatePlayer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const formData = {
        name: (form.blName as HTMLInputElement).value,
        nickname: (form.nickname as HTMLInputElement).value,
        age: parseInt((form.age as HTMLInputElement).value, 10),
        ageComment: (form.ageComment as HTMLInputElement).value,
        birthDate: (form.birthDate as HTMLInputElement).value,
        birthPlace: (form.birthPlace as HTMLInputElement).value,
        dominantLeg: (form.dominantLeg as HTMLInputElement).value,
        height: parseFloat((form.height as HTMLInputElement).value),
        shoeSize: parseFloat((form.shoeSize as HTMLInputElement).value),
        vision: parseFloat((form.vision as HTMLInputElement).value),
        bloodType: (form.bloodType as HTMLInputElement).value,
        zoadiac: (form.zodiac as HTMLInputElement).value,
        imageFile: (form.imageFile as HTMLInputElement).value
    };

    try {
      await api.post("/blplayers", formData);
      const newPlayers = await api.get("/blplayers");
      setBLPlayers(newPlayers.data);
      form.reset();
      
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="min-w-screen min-h-screen overflow-y-auto bg-[#1046A9]">
        <div className="flex justify-center">
            <div className="flex col-end-2 mt-[30px] bg-white w-[1830px] h-[800px]">
                <div className="bg-gray-300 w-[915px] h-full overflow-y-auto p-6">
                    <form ref={formRef} onSubmit={handleCreatePlayer} className="w-full h-full text-black space-y-6">
                        <h1 className="text-white text-[24px]">Criação de Jogador: Dados Básicos</h1>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <h2 className="pb-1">Player's Name:</h2>
                                <input name="blName" placeholder="Ex.: Isagi" className="w-full p-3 bg-white rounded-[8px]" />
                            </div>
                            <div>
                                <h2 className="pb-1">Player's Nickname:</h2>
                                <input name="nickname" placeholder="Ex.: Prodigy" className="w-full p-3 bg-white rounded-[8px]" />
                            </div>
                            <div>
                                <h2 className="pb-1">Player's Age:</h2>
                                <input name="age" placeholder="Ex.: 17" className="w-full p-3 bg-white rounded-[8px]" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <h2 className="pb-1">Age comment:</h2>
                                <input name="ageComment" placeholder="Optional" className="w-full p-3 bg-white rounded-[8px]" />
                            </div>
                            <div>
                                <h2 className="pb-1">Birth date:</h2>
                                <input name="birthDate" placeholder="Ex.: 13-09-2004" className="w-full p-3 bg-white rounded-[8px]" />
                            </div>
                            <div>
                                <h2 className="pb-1">Birth place:</h2>
                                <input name="birthPlace" placeholder="Ex.: Tokyo" className="w-full p-3 bg-white rounded-[8px]" />
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            <div>
                                <h2 className="pb-1">Dominant leg:</h2>
                                <input name="dominantLeg" placeholder="Ex.: Right" className="w-full p-3 bg-white rounded-[8px]" />
                            </div>
                            <div>
                                <h2 className="pb-1">Height:</h2>
                                <input name="height" placeholder="Ex.: 187" className="w-full p-3 bg-white rounded-[8px]" />
                            </div>
                            <div>
                                <h2 className="pb-1">Shoe size:</h2>
                                <input name="shoeSize" placeholder="Ex.: 28" className="w-full p-3 bg-white rounded-[8px]" />
                            </div>
                            <div>
                                <h2 className="pb-1">Vision:</h2>
                                <input name="vision" placeholder="Ex.: 0.9" className="w-full p-3 bg-white rounded-[8px]" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <h2 className="pb-1">Blood type:</h2>
                                <input name="bloodType" placeholder="Ex.: AB" className="w-full p-3 bg-white rounded-[8px]" />
                            </div>
                            <div>
                                <h2 className="pb-1">Zodiac:</h2>
                                <input name="zodiac" placeholder="Ex.: Virgo" className="w-full p-3 bg-white rounded-[8px]" />
                            </div>
                            <div>
                                <h2 className="pb-1">Image file name:</h2>
                                <input name="imageFile" placeholder="Ex.: Isagi_PFP.png" className="w-full p-3 bg-white rounded-[8px]" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                        <button type="submit" className="bg-blue-500 w-[400px] h-[50px] rounded-[12px] hover:cursor-pointer">Criar</button>
                        </div>
                    </form>
                    </div>

                <div className="bg-gray-600 w-[915px] h-full flex flex-col items-center justify-start p-8">
                    <select
                        value={chosenPlayer}
                        onChange={(e) => setChosenPlayer(e.target.value)}
                        className="w-[170px] p-2 rounded mb-4 bg-white"
                    >
                        <option value="">Selecione o jogador</option>
                        {BLplayers.map((player) => (
                            <option key={player.id} value={player.id}>
                                {player.name}
                            </option>
                        ))}
                    </select>
                    <h2 className="text-white pb-4">Informações do Jogador:</h2>
                    {chosenPlayerDetails ? (
                        <div className="flex flex-col items-center gap-4 w-full">
                            <img
                                src={`/src/assets/Profiles/${chosenPlayerDetails.imageUrl}`}
                                alt="Jogador"
                                className="w-[200px] h-[200px] object-contain mb-2"
                            />
                            <div className="bg-white rounded p-4 w-full max-w-md flex flex-col gap-2 text-black">
                                <div><strong>Nome:</strong> {chosenPlayerDetails.name}</div>
                                <div><strong>Apelido:</strong> {chosenPlayerDetails.nickname}</div>
                                <div><strong>Idade:</strong> {chosenPlayerDetails.age}</div>
                                <div><strong>Data de nascimento:</strong>{" "}
                                    {chosenPlayerDetails.birthDate
                                        ? new Date(chosenPlayerDetails.birthDate).toLocaleDateString("pt-BR") : ""}
                                </div>
                                <div><strong>Local de nascimento:</strong> {chosenPlayerDetails.birthPlace}</div>
                                <div><strong>Altura:</strong> {chosenPlayerDetails.height} cm</div>
                                <div><strong>Pé dominante:</strong> {chosenPlayerDetails.domLeg}</div>
                                <div><strong>Tamanho do sapato:</strong> {chosenPlayerDetails.shoeSize}</div>
                                <div><strong>Tipo sanguíneo:</strong> {chosenPlayerDetails.bloodType}</div>
                                <div><strong>Visão:</strong> {chosenPlayerDetails.vision}</div>
                                <div><strong>Zodíaco:</strong> {chosenPlayerDetails.zodiac}</div>
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-white">Nenhum jogador selecionado.</p>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
}

export default CharacterPage;