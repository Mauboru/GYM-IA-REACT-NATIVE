import { DataProps } from '../controllers/TrainingController'
import { GoogleGenerativeAI } from '@google/generative-ai'

class TrainingService {
    async execute({ name, weight, height, age, gender, objective, level, modal }: DataProps){
        try {
            const genAI = new GoogleGenerativeAI(process.env.API_KEY!);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const response = await model.generateContent(`
                Crie uma rotina de treino completa para uma pessoa com nome: ${name} 
                do sexo ${gender} 
                com peso atual: ${weight}kg, 
                altura: ${height}, 
                idade: ${age} anos e com foco e objetivo em ${objective}, 
                atualmente nível de atividade: ${level} e que irá treinar na modalidade: ${modal}.
                Certifique-se de que o JSON esteja bem formatado e válido conforme as regras JSON.
            `);
            
            console.log(JSON.stringify(response, null, 2));

            if (response.response && response.response.candidates) {
                const jsonText = response.response.candidates[0]?.content.parts[0].text as string;

                let jsonString = jsonText
                .replace(/```json\n/g, '') // Remove ```json no início
                .replace(/\n```/g, '')     // Remove ``` no final
                .replace(/\n/g, '')        // Remove quebras de linha extras
                .replace(/“|”/g, '"')      // Substitui aspas estilizadas por aspas normais
                .replace(/(\d+)-(\d+)/g, '"$1-$2"');

                console.log("JSON retornado pela API: ", jsonString);

                try {
                    let jsonObject = JSON.parse(jsonString); // Faz o parsing do JSON limpo
                    return { data: jsonObject };
                } catch (err) {
                    console.log('Erro ao analisar JSON:', err);
                    throw new Error('Falha ao analisar o JSON.');
                }
            }

            return { ok: true };  
        } catch (error) {
            console.log("Error no JSON: ", error);
            throw new Error("Failed Create");
        }
    }
}

export { TrainingService };