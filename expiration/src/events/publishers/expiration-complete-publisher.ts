import { Subjects, ExpirationCompleteEvent, Publisher } from "@gstickets2023/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}