import React, { useEffect, useState, useRef } from "react";
import api from "../services/api";
import TopBarBL from "../components/TopBarBL";

type PlayerDetails = {
  id: string;
  name: string;
  nickname: string;
  age: number;
  ageComment?: string;
  birthDate: string;
  birthPlace: string;
  domLeg: string;
  height: number;
  shoeSize: number;
  vision: number;
  bloodType: string;
  zodiac: string;
  imageUrl: string;
};

type QuestionsProps = {
  id: string;
  text: string;
  orderNumber: number;
};

const PlayerCreationPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [BLplayers, setBLPlayers] = useState<PlayerDetails[]>([]);
  const [chosenPlayer, setChosenPlayer] = useState<string>("");
  const [chosenPlayerDetails, setChosenPlayerDetails] = useState<PlayerDetails | null>(null);
  const [questions, setQuestions] = useState<QuestionsProps[]>([]);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [comments, setComments] = useState<{ [key: string]: string }>({});

//BLPLAYER'S GET
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const token = localStorage.getItem("token");
        const newPlayers = await api.get("/blplayers", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setBLPlayers(Array.isArray(newPlayers.data) ? newPlayers.data : []);
      } catch (err) {
        console.log(err);
        setBLPlayers([]);
      }
    };
    fetchPlayers();
  }, []);

  //CHOSEN PLAYER COMPLETE INFORMATION GET
  useEffect(() => {
    const fetchPlayerDetails = async () => {
      if (chosenPlayer) {
        try {
          const token = localStorage.getItem("token")
          const info = await api.get(`/complete/${chosenPlayer}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setChosenPlayerDetails(info.data);
        } catch (err) {
          console.log(err);
        }
      } else {
        setChosenPlayerDetails(null);
      }
    };
    fetchPlayerDetails();
  }, [chosenPlayer]);

  //QUESTION'S GET
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const token = localStorage.getItem("token");
        const info = await api.get("/questions", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const sorted = info.data.sort(
          (a: QuestionsProps, b: QuestionsProps) => a.orderNumber - b.orderNumber
        );
        setQuestions(sorted);
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuestions();
  }, []);

  //POST ANSWERS TO DATABASE
  const handleResponses = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!chosenPlayer) {
      console.log("Selecione um jogador");
      return;
    }
    const unanswered = questions.filter(
      (q) => !answers[q.id] || answers[q.id].trim() === ""
    );
    if (unanswered.length > 0) {
      console.log("Responda todas as perguntas");
      return;
    }

    try {
      const token = localStorage.getItem("token")
      await Promise.all(
        questions.map((ask) =>
          api.post("/responses", {
            playerId: chosenPlayer,
            questionId: ask.id,
            answer: answers[ask.id],
            comment: comments[ask.id] || "",
          }, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
        )
      );
      setAnswers({});
      setComments({});

      //UPDATES PLAYER'S DETAILS
      const updatedPlayerDetails = await api.get(`/complete/${chosenPlayer}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setChosenPlayerDetails(updatedPlayerDetails.data);
    } catch (err) {
      console.log("Erro ao enviar as respostas");
    }
  };

  //POST NEW PLAYER TO DATABASE
  const handleCreatePlayer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    //CONVERTS TO YYYY-MM-DD IF SEND AS DD-MM-YYYY
    const rawBirthDate = (form.birthDate as HTMLInputElement).value;
    let formattedBirthDate = rawBirthDate;
    if (/^\d{2}-\d{2}-\d{4}$/.test(rawBirthDate)) {
      const [day, month, year] = rawBirthDate.split("-");
      formattedBirthDate = `${year}-${month}-${day}`;
    }

    const formData = {
      name: (form.blName as HTMLInputElement).value,
      nickname: (form.nickname as HTMLInputElement).value,
      age: parseInt((form.age as HTMLInputElement).value, 10),
      ageComment: (form.ageComment as HTMLInputElement).value,
      birthDate: formattedBirthDate,
      birthPlace: (form.birthPlace as HTMLInputElement).value,
      domLeg: (form.dominantLeg as HTMLInputElement).value,
      height: parseFloat((form.height as HTMLInputElement).value),
      shoeSize: parseFloat((form.shoeSize as HTMLInputElement).value),
      vision: parseFloat((form.vision as HTMLInputElement).value),
      bloodType: (form.bloodType as HTMLInputElement).value,
      zodiac: (form.zodiac as HTMLInputElement).value,
      imageUrl: (form.imageFile as HTMLInputElement).value,
    };

    try {
      const token = localStorage.getItem("token");
      await api.post("/blplayers", formData, {
        headers: {
          Authorization: `Authorization ${token}`
        }
      });
      const newPlayers = await api.get("/blplayers", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setBLPlayers(Array.isArray(newPlayers.data) ? newPlayers.data : []);
      form.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-w-screen min-h-screen overflow-y-auto bg-[#1046A9]">
      <TopBarBL/>
      <div className="flex justify-center">
        <div className="flex col-end-2 mt-[30px] bg-white w-[1830px] h-[800px]">
          {/*FORMS TO CREATE A PLAYER*/}
          <div className="bg-gray-300 w-[915px] h-full overflow-y-auto p-6">
            <form
              ref={formRef}
              onSubmit={handleCreatePlayer}
              className="w-full h-full text-black space-y-6"
            >
              <h1 className="text-white text-[24px]">Criação de Jogador: Dados Básicos</h1>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h2 className="pb-1">Player's Name:</h2>
                  <input name="blName" placeholder="Ex.: Isagi" className="w-full p-3 bg-white rounded-[8px]" required />
                </div>
                <div>
                  <h2 className="pb-1">Player's Nickname:</h2>
                  <input name="nickname" placeholder="Ex.: Prodigy" className="w-full p-3 bg-white rounded-[8px]" required />
                </div>
                <div>
                  <h2 className="pb-1">Player's Age:</h2>
                  <input name="age" placeholder="Ex.: 17" className="w-full p-3 bg-white rounded-[8px]" required />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h2 className="pb-1">Age comment:</h2>
                  <input name="ageComment" placeholder="Optional" className="w-full p-3 bg-white rounded-[8px]" />
                </div>
                <div>
                  <h2 className="pb-1">Birth date:</h2>
                  <input name="birthDate" placeholder="Ex.: 13-09-2004" className="w-full p-3 bg-white rounded-[8px]" required />
                </div>
                <div>
                  <h2 className="pb-1">Birth place:</h2>
                  <input name="birthPlace" placeholder="Ex.: Tokyo" className="w-full p-3 bg-white rounded-[8px]" required />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <h2 className="pb-1">Dominant leg:</h2>
                  <input name="dominantLeg" placeholder="Ex.: Right" className="w-full p-3 bg-white rounded-[8px]" required />
                </div>
                <div>
                  <h2 className="pb-1">Height:</h2>
                  <input name="height" placeholder="Ex.: 187" className="w-full p-3 bg-white rounded-[8px]" required />
                </div>
                <div>
                  <h2 className="pb-1">Shoe size:</h2>
                  <input name="shoeSize" placeholder="Ex.: 28" className="w-full p-3 bg-white rounded-[8px]" required />
                </div>
                <div>
                  <h2 className="pb-1">Vision:</h2>
                  <input name="vision" placeholder="Ex.: 0.9" className="w-full p-3 bg-white rounded-[8px]" required />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h2 className="pb-1">Blood type:</h2>
                  <input name="bloodType" placeholder="Ex.: AB" className="w-full p-3 bg-white rounded-[8px]" required />
                </div>
                <div>
                  <h2 className="pb-1">Zodiac:</h2>
                  <input name="zodiac" placeholder="Ex.: Virgo" className="w-full p-3 bg-white rounded-[8px]" required />
                </div>
                <div>
                  <h2 className="pb-1">Image file name:</h2>
                  <input name="imageFile" placeholder="Ex.: Isagi_PFP.png" className="w-full p-3 bg-white rounded-[8px]" required />
                </div>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-blue-500 w-[400px] h-[50px] rounded-[12px] hover:cursor-pointer">
                  Criar
                </button>
              </div>
            </form>
          </div>

          {/*PLAYER VISUALIZATION*/}
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
            {chosenPlayerDetails ? (
              <div className="flex flex-col items-center gap-4 w-full">
                <h2 className="text-white pb-4">Informações do Jogador:</h2>
                <img
                  src={`/src/assets/Profiles/${chosenPlayerDetails.imageUrl}`}
                  alt="Jogador"
                  className="w-[200px] h-[200px] object-contain mb-2"
                />
                <div className="bg-white rounded p-4 w-full max-w-md flex flex-col gap-2 text-black">
                  <div>
                    <strong>Nome:</strong> {chosenPlayerDetails.name}
                  </div>
                  <div>
                    <strong>Apelido:</strong> {chosenPlayerDetails.nickname}
                  </div>
                  <div>
                    <strong>Idade:</strong> {chosenPlayerDetails.age}
                  </div>
                  <div>
                    <strong>Data de nascimento:</strong>{" "}
                    {chosenPlayerDetails.birthDate
                      ? new Date(chosenPlayerDetails.birthDate).toLocaleDateString("pt-BR")
                      : ""}
                  </div>
                  <div>
                    <strong>Local de nascimento:</strong> {chosenPlayerDetails.birthPlace}
                  </div>
                  <div>
                    <strong>Altura:</strong> {chosenPlayerDetails.height} cm
                  </div>
                  <div>
                    <strong>Pé dominante:</strong> {chosenPlayerDetails.domLeg}
                  </div>
                  <div>
                    <strong>Tamanho do sapato:</strong> {chosenPlayerDetails.shoeSize}
                  </div>
                  <div>
                    <strong>Tipo sanguíneo:</strong> {chosenPlayerDetails.bloodType}
                  </div>
                  <div>
                    <strong>Visão:</strong> {chosenPlayerDetails.vision}
                  </div>
                  <div>
                    <strong>Zodíaco:</strong> {chosenPlayerDetails.zodiac}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-center text-white">Nenhum jogador selecionado.</p>
            )}
          </div>
        </div>
      </div>

      {/*FORM FOR ANSWERS*/}
      <div className="flex justify-center mt-5">
        <form onSubmit={handleResponses} className="w-[1830px] h-full bg-white">
          <div>
            {questions.map((ask) => (
              <div key={ask.orderNumber} className="p-2 border border-black">
                <p>
                  {ask.orderNumber}. {ask.text}
                </p>
                <input
                  type="text"
                  placeholder="Answer here"
                  className="border border-black rounded-[4px] p-2 mr-2"
                  required
                  value={answers[ask.id] || ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setAnswers({ ...answers, [ask.id]: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Comment here"
                  className="border border-black rounded-[4px] p-2"
                  value={comments[ask.id] || ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setComments({ ...comments, [ask.id]: e.target.value })
                  }
                />
              </div>
            ))}
            <button type="submit" className="bg-blue-400 border border-black py-[20px] w-full h-full">
              Envie as respostas
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlayerCreationPage;