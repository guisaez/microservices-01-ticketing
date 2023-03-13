import { Publisher, Subjects, TicketCreatedEvent } from '@gstickets2023/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}