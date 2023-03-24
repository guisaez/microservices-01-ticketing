import { Publisher, Subjects, TicketUpdatedEvent } from '@gstickets2023/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}