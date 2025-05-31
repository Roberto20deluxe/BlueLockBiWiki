import React, { useEffect, useState, useRef } from "react";

const PlayerCreation = () => {
  const formRef = useRef(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [questions, setQuestions] = useState([]);
  const [players, setPlayers] = useState([]);
  const [firstQuestion, setFirstQuestion] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [response, setResponse] = useState("");
  const [comment, setComment] = useState("");
  const [respError, setRespError] = useState("");
  const [respSuccess, setRespSuccess] = useState("");

  // Carrega perguntas e jogadores ao montar o componente
  useEffect(() => {
    fetch('http://localhost:3001/questions')
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        if (data.length > 0) setFirstQuestion(data[0]);
      })
      .catch((err) => console.log("Erro ao buscar questões: ", err));

    fetch('http://localhost:3001/blplayers')
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.log("Erro ao buscar jogadores: ", err));
  }, []);

  // Criação de jogador
  const handleCreate = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const form = formRef.current;
    const formData = {
      name: form.name.value,
      age: parseInt(form.age.value, 10),
      nickname: form.nickname.value,
      ageComment: form.ageComment.value,
      birthDate: form.birthDate.value,
      birthPlace: form.birthPlace.value,
      height: parseFloat(form.height.value),
      domLeg: form.domLeg.value,
      shoeSize: parseFloat(form.shoeSize.value),
      bloodType: form.bloodType.value,
      vision: parseFloat(form.vision.value),
      zodiac: form.zodiac.value,
      imageUrl: form.imageUrl.value,
    };

    try {
      const res = await fetch("http://localhost:3001/blplayers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Erro ao criar jogador");
      setSuccess("Jogador criado com sucesso!");
      form.reset();
      // Atualiza lista de jogadores
      const updatedPlayers = await fetch('http://localhost:3001/blplayers').then(res => res.json());
      setPlayers(updatedPlayers);
    } catch (err) {
      setError(err.message);
    }
  };

  // Envio de resposta à primeira pergunta
  const handleResponseSubmit = async (e) => {
    e.preventDefault();
    setRespError("");
    setRespSuccess("");
    if (!selectedPlayer || !firstQuestion || !response) {
      setRespError("Preencha todos os campos obrigatórios");
      return;
    }
    try {
      const res = await fetch("http://localhost:3001/responses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          playerId: selectedPlayer,
          questionId: firstQuestion.id,
          answer: response,
          comment: comment,
        }),
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Erro ao enviar resposta");
      }
      setRespSuccess("Resposta enviada com sucesso!");
      setResponse("");
      setComment("");
    } catch (err) {
      setRespError(err.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-blue-500">
      <div className="rounded-md p-6 w-full h-[90vh] flex flex-col gap-6 bg-white shadow-lg overflow-y-auto">
        <h1 className="text-blue-700 text-3xl font-bold mb-4 text-center">Criação de Jogador</h1>
        <form ref={formRef} onSubmit={handleCreate} className="flex flex-col gap-4 w-full">
          <div className="grid gap-3">
            <div className="grid grid-cols-2 gap-3">
              <input name="name" placeholder="Nome" className="input input-bordered rounded bg-gray-100 p-3" required />
              <input name="nickname" placeholder="Apelido" className="input input-bordered rounded bg-gray-100 p-3" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input name="age" placeholder="Idade" type="number" className="input input-bordered rounded bg-gray-100 p-3" required />
              <input name="ageComment" placeholder="Comentário sobre idade" className="input input-bordered rounded bg-gray-100 p-3" />
            </div>
            <input name="birthDate" type="date" placeholder="Data de nascimento" className="input input-bordered rounded bg-gray-100 p-3" required />
            <div className="grid grid-cols-2 gap-3">
              <input name="birthPlace" placeholder="Cidade de nascimento" className="input input-bordered rounded bg-gray-100 p-3" />
              <input name="domLeg" placeholder="Perna dominante" className="input input-bordered rounded bg-gray-100 p-3" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input name="height" placeholder="Altura (cm)" type="number" className="input input-bordered rounded bg-gray-100 p-3" />
              <input name="shoeSize" placeholder="Tamanho do sapato" type="number" className="input input-bordered rounded bg-gray-100 p-3" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <input name="bloodType" placeholder="Tipo sanguíneo" className="input input-bordered rounded bg-gray-100 p-3" />
              <input name="vision" placeholder="Visão" type="number" className="input input-bordered rounded bg-gray-100 p-3" />
              <input name="zodiac" placeholder="Signo" className="input input-bordered rounded bg-gray-100 p-3" />
            </div>
            <input name="imageUrl" placeholder="Nome do arquivo da imagem" className="input input-bordered rounded bg-gray-100 p-3" />
          </div>
          <button type="submit" className="btn btn-primary mt-2 bg-blue-400 text-white">Criar</button>
          {error && <div className="text-red-500">{error}</div>}
          {success && <div className="text-green-600">{success}</div>}
        </form>

        <form onSubmit={handleResponseSubmit} className="flex flex-col gap-3 mt-8 bg-gray-50 p-4 rounded w-full">
          <label className="font-semibold">Responder à primeira pergunta:</label>
          <select
            value={selectedPlayer}
            onChange={e => setSelectedPlayer(e.target.value)}
            className="input input-bordered rounded bg-white p-2"
            required
          >
            <option value="">Selecione o jogador</option>
            {players.map(player => (
              <option key={player.id} value={player.id}>{player.name}</option>
            ))}
          </select>
          {firstQuestion && (
            <>
              <div className="mb-2">{firstQuestion.text}</div>
              <input
                type="text"
                placeholder="Sua resposta"
                value={response}
                onChange={e => setResponse(e.target.value)}
                className="input input-bordered rounded bg-white p-2"
                required
              />
            </>
          )}
          <input
            type="text"
            placeholder="Comentário (opcional)"
            value={comment}
            onChange={e => setComment(e.target.value)}
            className="input input-bordered rounded bg-white p-2"
          />
          <button type="submit" className="btn btn-primary bg-blue-400 text-white">Responder</button>
          {respError && <div className="text-red-500">{respError}</div>}
          {respSuccess && <div className="text-green-600">{respSuccess}</div>}
        </form>
      </div>
    </div>
  );
};

export default PlayerCreation;