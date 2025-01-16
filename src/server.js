import fastify from "fastify";
import { sequelize } from "./config/sequelize.js";
import routes from "./router.js";

const app = fastify()

app.register(routes)

app.listen({port: 3000, host: '0.0.0.0'}, async (err, address) => {
    if(err){
        console.log(err)
        process.exit(1)
    }else {
        console.log("server rodando")
        try {
            await sequelize.authenticate()
            console.log("Banco conectado")
        } catch(error){
            console.log(error)
            console.log("Erro ao conectar com o banco")
        }
    }
})