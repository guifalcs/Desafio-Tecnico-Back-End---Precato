import smsMessages from "./routes/smsMessages.js"

const routes = async (fastify, options) => {
    fastify.register(smsMessages, {prefix: '/api/smsMessages'})
}

export default routes