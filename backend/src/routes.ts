import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { TrainingController } from './controllers/TrainingController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
        return new TrainingController().handle(request, reply)
    })
}