import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';

console.clear();

const stan = nats.connect('ticketing', 'abc', {
    url: 'http://localhost:4222'
}); // client is often replaced with 'stan'

stan.on('connect', async () => {
    console.log('Publisher connected to NATS');

    const publisher = new TicketCreatedPublisher(stan);

    try{
        await publisher.publish({
            id: '123',
            title: 'Title',
            price: 20
        })
    }catch (err){
        console.log(err);
    }
    
    /*const data = JSON.stringify({
        id: '123',
        title: 'Title',
        price: 20
    })

    // third argument is optional
    // events are referred as message.
    stan.publish('ticket:created', data, () => {
        console.log('Event published');
    })
    */

})




