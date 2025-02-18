import fastify, { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/createCustomerController";
import { ListCustomerController } from "./controllers/ListCustomerController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    console.log("Registering routes...");

    fastify.get("/teste", async(request: FastifyRequest, reply: FastifyReply) =>{
        console.log("Route /teste accessed");
        return { ok: true }
    })
        
    fastify.post("/customer", async(request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply)
    })
    
    fastify.get("/customers", async(request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomerController().handle(request, reply)
    })

    fastify.delete("/customer", async(request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply)
    })
}

