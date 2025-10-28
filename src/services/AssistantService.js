

export const perguntarAssistente = async (mensagem) => {
    try {
        const response = await fetch('http://localhost:8080/api/assistant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mensagem)
        });

        if (!response.ok) {
            throw new Error('Erro ao se comunicar com a API');
        }


        const data = await response.text();
        return data;

    } catch (error) {
        console.error(error);
        return 'Ocorreu um erro.';
    }

}