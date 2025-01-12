import fastify from "fastify";
import { sequelize } from "./config/sequelize.js";

const app = fastify()

app.listen({port: 3000}, async (err, address) => {
    if(err){
        console.log(err)
        process.exit(1)
    }else {
        console.log("server rodando")
        try {
            await sequelize.authenticate()
            console.log("Banco conectado")
        } catch(error){
            console.log("Erro ao conectar com o banco")
        }
    }
})