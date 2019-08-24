const amqp = require('amqplib/callback_api')

const QUEUE_SEND_MAIL = 'QUEUE_SEND_MAIL'

const QUEUES = [QUEUE_SEND_MAIL]

let channel = null

const connect = () => {
    amqp.connect('amqp://localhost', (err, connection) => {
        if (err) {
            console.log(err)
            setTimeout(connect, 1000)
        }

        connection.createChannel((err, ch) => {
            if (err) {
                console.log(err)
                setTimeout(connect, 1000)
            }

            QUEUES.forEach(v => ch.assertQueue(v, {durable: true}))

            channel = ch

        })

    })
}

module.exports.send = async (queue, msg) => {
    channel.sendToQueue(queue, Buffer.from(msg), {persistent: true})
}
