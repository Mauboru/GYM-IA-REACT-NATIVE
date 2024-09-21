import { DataProps } from '../controllers/TrainingController'
import { GoogleGenerativeAI } from '@google/generative-ai'

class TrainingService {
    async execute({ name, weight, height, age, gender, objective, level, modal }: DataProps){
        try {
            const genAI = new GoogleGenerativeAI(process.env.API_KEY!);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

            const response = await model.generateContent(`
                Crie uma rotina de treino completa para uma pessoa com nome: ${name} 
                do sexo ${gender} 
                com peso atual: ${weight}kg, 
                altura: ${height}, 
                idade: ${age} anos e com foco e objetivo em ${objective}, 
                atualmente nível de atividade: ${level} e que ira treinar na modalidade: ${modal}
                e ignore qualquer outro parametro que não seja os passados, 
                retorne em json com as respectivas propriedades, 
                propriedade nome o nome da pessoa, propriedade sexo com sexo, propriedade idade, 
                propriedade altura, propriedade peso, propriedade objetivo com o objetivo atual, 
                propriedade treinos com uma array contendo dentro cada objeto sendo 
                um treino por dia e dentro de cada treino a propriedade modelo seja academia ou calistenia, 
                propriedade nome com nome e a propriedade treinos com array contendo os treinos 
                dessa refeição e pode incluir uma propreidade como suplementos contendo array com 
                sugestão de suplemento que é indicado para o sexo dessa pessoa e o objetivo dela e 
                não retorne nenhuma observação alem das passadas no prompt, 
                retorne em json e nenhuma propriedade pode ter acento.`);
            
            console.log(JSON.stringify(response, null, 2))

            if (response.response && response.response.candidates) {
                const jsonText = response.response.candidates[0]?.content.parts[0].text as string;
                let jsonString = jsonText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();
                let jsonObject = JSON.parse(jsonString);
                return ({ data: jsonObject })
            }
            return { ok: true}  
        } catch (error) {
            console.log("Error no JSON: ", error);
            throw new Error("Failed Create");
        }
    }
}

export { TrainingService }