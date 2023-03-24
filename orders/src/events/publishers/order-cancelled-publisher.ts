import { Publisher, OrderCancelledEvent, Subjects } from '@gstickets2023/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}