import React, { useEffect, useState, useRef } from "react";

const PlayerCreation = () => {
  const formRef = useRef(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [questions, setQuestions] = useState([]);
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [answers, setAnswers] = useState({});
  const [comments, setComments] = useState({});
  const [respError, setRespError] = useState("");
  const [respSuccess, setRespSuccess] = useState("");
  const [playerDetails, setPlayerDetails] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/questions")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => a.orderNumber - b.orderNumber);
        setQuestions(sorted);
      })
      .catch((err) => console.log("Erro ao buscar questões: ", err));

    fetch("http://localhost:3001/blplayers")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.log("Erro ao buscar jogadores: ", err));
  }, []);

  useEffect(() => {
    if (selectedPlayer) {
      fetch(`http://localhost:3001/complete/${selectedPlayer}`)
        .then((res) => res.json())
        .then((data) => setPlayerDetails(data))
        .catch((err) => console.log("Erro ao buscar detalhes do jogador: ", err));
    } else {
      setPlayerDetails(null);
    }
  }, [selectedPlayer]);

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
      const updatedPlayers = await fetch("http://localhost:3001/blplayers").then((res) => res.json());
      setPlayers(updatedPlayers);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAllResponsesSubmit = async (e) => {
    e.preventDefault();
    setRespError("");
    setRespSuccess("");

    if (!selectedPlayer) {
      setRespError("Selecione um jogador.");
      return;
    }

    const unanswered = questions.filter((q) => !answers[q.id] || answers[q.id].trim() === "");
    if (unanswered.length > 0) {
      setRespError("Responda todas as perguntas antes de enviar.");
      return;
    }

    try {
      await Promise.all(
        questions.map((q) =>
          fetch("http://localhost:3001/responses", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              playerId: selectedPlayer,
              questionId: q.id,
              answer: answers[q.id],
              comment: comments[q.id] || "",
            }),
          })
        )
      );
      setRespSuccess("Todas as respostas foram enviadas com sucesso!");
      setAnswers({});
      setComments({});
      const updatedDetails = await fetch(`http://localhost:3001/complete/${selectedPlayer}`).then((res) => res.json());
      setPlayerDetails(updatedDetails);
    } catch (err) {
      setRespError("Erro ao enviar respostas.");
    }
  };

  return (
    <div className="rounded-md p-6 w-full min-h-screen flex flex-col gap-6 bg-[#1046A9] shadow-lg overflow-y-auto text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">Criação de Jogador</h1>

      {/* Formulário de Criação */}
      <form ref={formRef} onSubmit={handleCreate} className="flex flex-col gap-4 w-full bg-white text-black p-4 rounded-md">
        <div className="grid gap-3">
          <div className="grid grid-cols-2 gap-3">
            <input name="name" placeholder="Nome" className="input p-3 bg-gray-100 rounded" required />
            <input name="nickname" placeholder="Apelido" className="input p-3 bg-gray-100 rounded" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input name="age" type="number" placeholder="Idade" className="input p-3 bg-gray-100 rounded" required />
            <input name="ageComment" placeholder="Comentário sobre idade" className="input p-3 bg-gray-100 rounded" />
          </div>
          <input name="birthDate" type="date" className="input p-3 bg-gray-100 rounded" required />
          <div className="grid grid-cols-2 gap-3">
            <input name="birthPlace" placeholder="Cidade de nascimento" className="input p-3 bg-gray-100 rounded" />
            <input name="domLeg" placeholder="Perna dominante" className="input p-3 bg-gray-100 rounded" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input name="height" type="number" placeholder="Altura" className="input p-3 bg-gray-100 rounded" />
            <input name="shoeSize" type="number" placeholder="Tamanho do sapato" className="input p-3 bg-gray-100 rounded" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <input name="bloodType" placeholder="Tipo sanguíneo" className="input p-3 bg-gray-100 rounded" />
            <input name="vision" type="number" placeholder="Visão" className="input p-3 bg-gray-100 rounded" />
            <input name="zodiac" placeholder="Signo" className="input p-3 bg-gray-100 rounded" />
          </div>
          <input name="imageUrl" placeholder="Nome do arquivo da imagem" className="input p-3 bg-gray-100 rounded" />
        </div>
        <button type="submit" className="btn bg-blue-500 text-white mt-2">Criar</button>
        {error && <div className="text-red-500">{error}</div>}
        {success && <div className="text-green-600">{success}</div>}
      </form>

      {/* Formulário de respostas */}
      <form onSubmit={handleAllResponsesSubmit} className="flex flex-col gap-4 mt-8 bg-white text-black p-4 rounded-md">
        <h2 className="font-semibold text-lg">Responder às perguntas:</h2>

        <select
          value={selectedPlayer}
          onChange={(e) => setSelectedPlayer(e.target.value)}
          className="input p-2 bg-gray-100 rounded"
        >
          <option value="">Selecione o jogador</option>
          {players.map((p) => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>

        {questions.map((q) => (
          <div key={q.id} className="mb-4 border-b pb-4">
            <label className="font-medium">{q.text}</label>
            <input
              type="text"
              placeholder="Sua resposta"
              value={answers[q.id] || ""}
              onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
              className="input p-2 bg-gray-100 mt-2 rounded w-full"
              required
            />
            <input
              type="text"
              placeholder="Comentário (opcional)"
              value={comments[q.id] || ""}
              onChange={(e) => setComments({ ...comments, [q.id]: e.target.value })}
              className="input p-2 bg-gray-100 mt-2 rounded w-full"
            />
          </div>
        ))}

        <button type="submit" className="btn bg-blue-500 text-white mt-2">Enviar todas as respostas</button>
        {respError && <div className="text-red-500">{respError}</div>}
        {respSuccess && <div className="text-green-600">{respSuccess}</div>}
      </form>

      {/* Visualização dos dados do jogador */}
      <div className="bg-white text-black p-4 rounded-md mt-8">
        <h2 className="text-xl font-bold mb-4">Informações do Jogador</h2>
        {playerDetails ? (
          <div className="flex flex-col items-center">
            <img src={`/src/assets/Profiles/${playerDetails.imageUrl}`} alt="Foto do jogador" className="w-48 h-48 object-cover rounded-full mb-4" />
            <div className="mb-4 text-center">
              <p><strong>Nome:</strong> {playerDetails.name}</p>
              <p><strong>Apelido:</strong> {playerDetails.nickname}</p>
              <p><strong>Idade:</strong> {playerDetails.age}</p>
              <p><strong>Comentário Idade:</strong> {playerDetails.ageComment}</p>
              <p><strong>Nascimento:</strong> {new Date(playerDetails.birthDate).toLocaleDateString()}</p>
              <p><strong>Cidade:</strong> {playerDetails.birthPlace}</p>
              <p><strong>Altura:</strong> {playerDetails.height} cm</p>
              <p><strong>Pé dominante:</strong> {playerDetails.domLeg}</p>
              <p><strong>Tamanho do sapato:</strong> {playerDetails.shoeSize}</p>
              <p><strong>Tipo sanguíneo:</strong> {playerDetails.bloodType}</p>
              <p><strong>Visão:</strong> {playerDetails.vision}</p>
              <p><strong>Signo:</strong> {playerDetails.zodiac}</p>
            </div>
            <div className="w-full">
              <h3 className="font-semibold text-lg mb-2">Respostas</h3>
              {questions.map((q) => {
                const resp = playerDetails.responses.find((r) => r.question.id === q.id);
                return (
                  <div key={q.id} className="mb-2 border-b pb-2">
                    <p><strong>{q.text}</strong></p>
                    <p>Resposta: {resp?.answer || "Não respondida"}</p>
                    {resp?.comment && <p>Comentário: {resp.comment}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <p className="text-center">Nenhum jogador selecionado.</p>
        )}
      </div>
    </div>
  );
};

export default PlayerCreation;
