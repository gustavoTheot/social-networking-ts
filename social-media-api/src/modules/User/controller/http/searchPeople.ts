import { FastifyReply, FastifyRequest } from "fastify";
import { UserRepository } from "../../repository/UserRepository";
import { z } from "zod";
import { User } from "../../repository/IUserRespository";

const SearchPeopleBodySchema = z.object({
    nick_name: z.string().optional(),
    name: z.string().optional()
})

export async function SearchPeople(request: FastifyRequest, reply: FastifyReply) {
    const userRepository = new UserRepository()
    const { nick_name, name } = SearchPeopleBodySchema.parse(request.query)

    try {
        let user;

        if (name) {
            user = await userRepository.findUserByName(name)
        } else {
            user = await User.find({ nick_name })
        }

        reply.status(200).send(user)
    } catch (error) {
        reply.status(500).send({ message: 'Internal server error' })
    }
}