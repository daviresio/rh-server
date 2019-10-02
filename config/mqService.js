const amqp = require('amqplib/callback_api')

const MAIL_QUEUE = 'MAIL_QUEUE'
const RELATORY_QUEUE = 'RELATORY_QUEUE'

const MAIL_CONTADOR_SOLICITAR_FERIAS = 'MAIL_CONTADOR_SOLICITAR_FERIAS'
const MAIL_CONTADOR_DESLIGAR_FUNCIONARIO = 'MAIL_CONTADOR_DESLIGAR_FUNCIONARIO'

const MAIL_MARKETING_BOAS_VINDAS = 'MAIL_MARKETING_BOAS_VINDAS'


let channel = null


amqp.connect('amqp://queue:5672', (err, conn) => {
    if (err) throw err

    conn.createChannel((err, ch) => {
        if (err) throw err

        channel = ch

        channel.assertQueue(MAIL_QUEUE, {durable: true})
        channel.assertQueue(RELATORY_QUEUE, {durable: false})

    })

})

function generateRelatory(data) {

    const correlationId = generateUuid()

    return new Promise((resolve, reject) => {
        try {
            channel.assertQueue('', {exclusive: true, autoDelete: true}, (err, q) => {
                if(err) reject(err)

                setTimeout(() => {
                    channel.cancel(correlationId)
                    reject(new Error('Server Error'))
                },10000)

                channel.sendToQueue(RELATORY_QUEUE,
                    Buffer.from(JSON.stringify(data)), {
                        correlationId: correlationId,
                        replyTo: q.queue,
                    })

                channel.consume(q.queue, msg => {
                    if(msg.properties.correlationId === correlationId) {
                        resolve(msg.content)
                        channel.cancel(correlationId)
                    }
                }, {noAck: true, consumerTag: correlationId})
            })

        } catch (e) {
            reject(e)
        }
    })
}

function Sender(destinatary, type, data) {
    this.destinatary = destinatary
    this.type = type
    this.data = data
}

function send(queue, destinatary, type, data) {
    try {
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(new Sender(destinatary, type, data))), {persistent: true})
    } catch (e) {
        console.log(e)
    }
}

const generateUuid = () => Math.random().toString() + Math.random().toString() + Math.random().toString()

module.exports = {
    send,
    generateRelatory,
    queue: {MAIL_QUEUE, RELATORY_QUEUE},
    type: {
        MAIL_CONTADOR_SOLICITAR_FERIAS,
        MAIL_CONTADOR_DESLIGAR_FUNCIONARIO,
        MAIL_MARKETING_BOAS_VINDAS,
    },
}
