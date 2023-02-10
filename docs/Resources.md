### Tables

#### User
* email: string
* password: string

#### Ticket
* title: string
* price: number
* userId: Ref to User
* orderId: Ref to Order

#### Order
* userId: Ref to User
* status: Created | Cancelled | Awaiting Payment | Completed
* ticketId: Ref to Ticket
* expiresAt: Date

#### Charge
* orderId : Ref to Order
* status: Created | Failed | Completed
* amount: number
* stripeId: string
* stripeRefundId: string

