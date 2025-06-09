import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import TopBarBL from "../components/TopBarBL";

type PlayerProps = {
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
    responses?: ResponseRaw[];
};

type ResponseRaw = {
    id: string;
    playerId: string;
    questionId: string;
    answer: string;
    comment: string;
    question: {
        id: string;
        text: string;
        orderNumber: number;
    };
};

const ViewPlayerPage = () => {
    const { id } = useParams<{ id: string }>();
    const [playerInfo, setPlayerInfo] = useState<PlayerProps | null>(null);
    const [responses, setResponses] = useState<ResponseRaw[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const playerRes = await api.get(`/complete/${id}`);
                setPlayerInfo(playerRes.data);
                setResponses(playerRes.data.responses || []);
            } catch (err) {
                console.log(err);
            }
        };
        if (id) fetchData();
    }, [id]);

    return (
    <div className="w-min-full min-h-screen bg-gray-100">
        <TopBarBL />
        <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded shadow">
            {playerInfo ? (
                <>
                    <div className="flex items-center gap-6 mb-6">
                        <img
                            src={`/src/assets/Profiles/${playerInfo.imageUrl}`}
                            alt={playerInfo.name}
                            className="w-32 h-32 object-cover rounded-lg border"
                        />
                        <div>
                            <h2 className="text-2xl font-bold">{playerInfo.name} <span className="text-gray-500">({playerInfo.nickname})</span></h2>
                            <p><b>Idade:</b> {playerInfo.age} {playerInfo.ageComment && <span>({playerInfo.ageComment})</span>}</p>
                            <p><b>Data de nascimento:</b> {playerInfo.birthDate}</p>
                            <p><b>Local de nascimento:</b> {playerInfo.birthPlace}</p>
                            <p><b>Pé dominante:</b> {playerInfo.domLeg}</p>
                            <p><b>Altura:</b> {playerInfo.height} cm</p>
                            <p><b>Tamanho do sapato:</b> {playerInfo.shoeSize}</p>
                            <p><b>Visão:</b> {playerInfo.vision}</p>
                            <p><b>Tipo sanguíneo:</b> {playerInfo.bloodType}</p>
                            <p><b>Zodíaco:</b> {playerInfo.zodiac}</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Perguntas e Respostas</h3>
                        <ul className="space-y-2">
                            {responses
                                .sort((a, b) => a.question.orderNumber - b.question.orderNumber)
                                .map((resp) => (
                                    <div key={resp.id} className="ml-2">
                                        <span className="font-medium">{resp.question.text}:</span>{" "}
                                        <span className="text-blue-700">{resp.answer}</span>
                                        {resp.comment && (
                                            <span className="text-gray-500 text-sm"> ({resp.comment})</span>
                                        )}
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </>
            ) : (
                <div className="text-center py-10 text-gray-500">Carregando informações do jogador...</div>
            )}
        </div>
    </div>
);
};

export default ViewPlayerPage;