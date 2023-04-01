import { Listener, Subjects, OrderCancelledEvent, OrderStatus } from "@gstickets2023/common";
import { Message } from "node-nats-streaming";
import { Order } from "../../models/order";
import { queueGroupName } from "./queue-group-name";

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
    queueGroupName = queueGroupName;

    async onMessage(data: OrderCancelledEvent['data'], msg: Message) {
        const order = await Order.findByEvent(data);

        if(!order){
            throw new Error('Order Not Found!')
        }

        order.set({ status: OrderStatus.Cancelled })
        await order.save();

        msg.ack();
    }
}