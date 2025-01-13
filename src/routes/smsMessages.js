import { updateSmsMessage } from "../controllers/smsMessages.js"

const smsMessages = async (fastify, options) => {

    fastify.put('/:id', updateSmsMessage)

}

export default smsMessages