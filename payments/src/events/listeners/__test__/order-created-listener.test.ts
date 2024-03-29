import { natsWrapper } from "../../../nats-wrapper";
import { OrderCreatedListener } from "../order-created-event";
import { Order } from "../../../models/order";
import { OrderCreatedEvent, OrderStatus, Subjects } from "@gstickets2023/common";
import mongoose from "mongoose";
import { Message } from "node-nats-streaming";

const setup = () => {
    const listener = new OrderCreatedListener(natsWrapper.client);

    const data: OrderCreatedEvent['data'] = {
        id: new mongoose.Types.ObjectId().toHexString(),
        version: 0,
        status: OrderStatus.Created,
        userId: new mongoose.Types.ObjectId().toHexString(),
        expiresAt: new Date().toString(),
        ticket: {
            id: new mongoose.Types.ObjectId().toHexString(),
            price: 10
        }
    };

    // @ts-ignore
    const msg: Message = {
        ack: jest.fn()
    }

    return { listener, data, msg }
}

it('replicates the order info', async () => {
    const { listener, data, msg } = await setup();

    await listener.onMessage(data, msg);

    const order = await Order.findById(data.id);

    expect(order!.price).toEqual(data.ticket.price)
})

it('acks the message', async () => {
    const { listener, data, msg } = await setup();

    await listener.onMessage(data, msg);

    expect(msg.ack).toHaveBeenCalled();
})