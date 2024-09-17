import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateNutritionService } from '../services/CreateNutritionService'

export interface DataProps{
    name: String,
    weight: String,
    height: String,
    age: String,
    gender: String,
    objective: String,
    level: String
}

class CreateNutritionController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, weight, height, age, gender, objective, level } = request.body as DataProps;
        
        const createNutrition = new CreateNutritionService();
        const nutrition = await createNutrition.execute({name, weight, height, age, gender, objective, level});

        reply.send(nutrition);
    }
}

export { CreateNutritionController }