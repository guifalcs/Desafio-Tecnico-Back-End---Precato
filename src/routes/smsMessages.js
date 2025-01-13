import { getSmsByStatus, updateSmsMessage } from "../controllers/smsMessages.js"

const smsMessages = async (fastify) => {
    fastify.put('/:id', updateSmsMessage)
    fastify.post('/smsByStatus', getSmsByStatus)
}

export default smsMessages