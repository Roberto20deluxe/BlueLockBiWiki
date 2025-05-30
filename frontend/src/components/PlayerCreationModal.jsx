import React, { useRef, useState } from "react";

const PlayerCreationModal = ({ onPlayerCreated }) => {
  const formRef = useRef(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [createdPlayer, setCreatedPlayer] = useState(null);

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
      setCreatedPlayer(formData);
      form.reset();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex w-full h-[700px] justify-center items-center">
      <div className="rounded-md p-6 w-[550px] h-auto flex flex-col gap-4 justify-center items-center">
        <div className="text-white text-[40px] font-semibold mb-2">Criação de Jogador</div>
        <form ref={formRef} onSubmit={handleCreate} className="w-full flex flex-col gap-4">
          <div className="grid gap-3">
            <div className="grid grid-cols-2 gap-3">
              <input name="name" placeholder="Name" className="input input-bordered rounded-[8px] bg-white p-3 max-w-xs" required />
              <input name="nickname" placeholder="Nickname" className="input input-bordered rounded-[8px] bg-white p-3 max-w-xs" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input name="age" placeholder="Age" className="input input-bordered rounded-[8px] bg-white p-3 max-w-xs" required />
              <input name="ageComment" placeholder="Age comment" className="input input-bordered rounded-[8px] bg-white p-3 max-w-xs" />
            </div>
            <div>
              <input name="birthDate" type="date" placeholder="Birth date (dd/mm/aaaa)" className="input input-bordered rounded-[8px] bg-white p-3 w-full" required />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input name="birthPlace" placeholder="Birth City" className="input input-bordered rounded-[8px] bg-white p-3 max-w-xs" />
              <input name="domLeg" placeholder="Dominant leg" className="input input-bordered rounded-[8px] bg-white p-3 max-w-xs" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input name="height" placeholder="Height (cm)" className="input input-bordered rounded-[8px] bg-white p-3 max-w-xs" />
              <input name="shoeSize" placeholder="Shoe size" className="input input-bordered rounded-[8px] bg-white p-3 max-w-xs" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <input name="bloodType" placeholder="Blood type" className="input input-bordered rounded-[8px] bg-white p-3 max-w-xs" />
              <input name="vision" placeholder="Vision" className="input input-bordered rounded-[8px] bg-white p-3 max-w-xs" />
              <input name="zodiac" placeholder="Zodiac" className="input input-bordered rounded-[8px] bg-white p-3 max-w-xs" />
            </div>
            <div>
              <input name="imageUrl" placeholder="Image file's name" className="input input-bordered rounded-[8px] bg-white p-3 w-full" />
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn btn-primary mt-4 py-3 w-[250px] bg-blue-400">Criar</button>
          </div>
          {error && <div className="text-red-500">{error}</div>}
          {success && <div className="text-green-600">{success}</div>}
        </form>
      </div>
    </div>
  );
};

export default PlayerCreationModal;