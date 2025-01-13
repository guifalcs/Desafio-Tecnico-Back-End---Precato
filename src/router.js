import updateSmsMessages from "./routes/updateSmsMessages.js"

const routes = async (fastify, options) => {
    fastify.register(updateSmsMessages, {prefix: '/api/updateSmsMessages'})
}

export default routes