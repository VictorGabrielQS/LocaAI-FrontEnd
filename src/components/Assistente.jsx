import React, { useState } from "react";
import { perguntarAssistente } from "../services/AssistantService";
import '../App'

function Assistente() {
    const [mensagem, setMensagem] = useState("");
    const [chat, setChat] = useState([]); // array com todas as mensagens

    const enviarMensagem = async () => {
        if (!mensagem.trim()) return;

        // adiciona a mensagem do usuário
        setChat(prev => [...prev, { texto: mensagem, tipo: "usuario" }]);
        setMensagem(""); // limpa input

        // envia para a IA e adiciona a resposta
        const result = await perguntarAssistente(mensagem);
        setChat(prev => [...prev, { texto: result, tipo: "assistente" }]);
    }

    return (
        <div className="chat-container">
            {/* Renderiza todas as mensagens em cards separados */}
            {chat.map((msg, index) => (
                <div
                    key={index}
                    className={`card-assistent ${msg.tipo}`}
                >
                    {msg.tipo === "assistente" && <h5>Assistente</h5>}
                    {msg.tipo === "usuario" && <h5>Sua Mensagem</h5>}
                    <div className="card-response-assistent">
                        <p>{msg.texto}</p>
                    </div>
                </div>
            ))}


            {/* Linha separadora */}
            <div className="linha"></div>

            {/* Input */}
            <div className="chat-input-container">
                <input
                    className="input-assistente"
                    type="text"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Digite sua mensagem"
                    onKeyDown={(e) => e.key === "Enter" && enviarMensagem()}
                />
                <button onClick={enviarMensagem} className="btn-enviar">
                    &gt;
                </button>
            </div>
        </div>
    );
}

export default Assistente;
