const updateSmsMessages = async (fastify, options) => {

    fastify.post('/:id', (req, res) => {
        console.log('rota sms funcionando')
    })

}

export default updateSmsMessages