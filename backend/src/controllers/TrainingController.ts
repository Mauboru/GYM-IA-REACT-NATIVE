import { FastifyRequest, FastifyReply } from 'fastify'
import { TrainingService } from '../services/TrainingService'

export interface DataProps{
    name: String,
    weight: String,
    height: String,
    age: String,
    gender: String,
    objective: String,
    level: String,
    modal: String
}

class TrainingController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, weight, height, age, gender, objective, level, modal } = request.body as DataProps;
        
        const create = new TrainingService();
        const training = await create.execute({name, weight, height, age, gender, objective, level, modal});

        reply.send(training);
    }
}

export { TrainingController }