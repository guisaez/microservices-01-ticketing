import { Subjects, Publisher, PaymentCreatedEvent } from "@gstickets2023/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}