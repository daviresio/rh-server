const amqp = require('amqplib/callback_api')

const MAIL_QUEUE = 'MAIL_QUEUE'

const MAIL_CONTADOR_SOLICITAR_FERIAS = 'MAIL_CONTADOR_SOLICITAR_FERIAS'
const MAIL_CONTADOR_DESLIGAR_FUNCIONARIO = 'MAIL_CONTADOR_DESLIGAR_FUNCIONARIO'

const MAIL_MARKETING_BOAS_VINDAS = 'MAIL_MARKETING_BOAS_VINDAS'

const QUEUES = [MAIL_QUEUE]

let channel = null

amqp.connect('amqp://queue:5672', (err, conn) => {
    if (err) throw err

    conn.createChannel((err, ch) => {
        if (err) throw err

        ch.assertQueue(MAIL_QUEUE, {durable: true})

        channel = ch
    })

})

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



module.exports = {send, queue: {MAIL_QUEUE}, type: {MAIL_CONTADOR_SOLICITAR_FERIAS, MAIL_CONTADOR_DESLIGAR_FUNCIONARIO, MAIL_MARKETING_BOAS_VINDAS}}
