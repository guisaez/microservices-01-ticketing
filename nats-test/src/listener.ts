import nats from 'node-nats-streaming';
import { randomBytes } from 'crypto';
import { TicketCreatedListener } from './events/ticket-created-listener';

console.clear();

// Second argument corresponds to the client ID
const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
    url: 'http://localhost:4222'
});

stan.on('connect', () => {
    console.log('Listener connected to NATS');

    stan.on('close', () => {
        console.log('NATS connection closed');

        process.exit();
    });


    new TicketCreatedListener(stan).listen();

    /*const options = stan.subscriptionOptions()
        .setManualAckMode(true) // set the manual acknowledgement to true
        .setDeliverAllAvailable()
        .setDurableName('accounting-service')


    // second argument would be the queue group
    // third argument would be the options
    const subscription = stan.subscribe('ticket:created', 'queue-group-name', options);

    subscription.on('message', (msg: Message) => {
        const data = msg.getData();

        if(typeof data === 'string') {
            console.log(`Received event #${msg.getSequence()}, with data: ${data}`);
        }

        msg.ack()
    })
    */

})

process.on('SIGINT', () => stan.close());
process.on('SIGTERM', () => stan.close());



