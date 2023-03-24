### orders

| Route | Method | Body | Purpose | 
| :---: | :---:  | :---:| :---:   |
| /api/orders | GET |  | Retrieve all active orders for the given user making the request |
| /api/orders:id | GET |  | Get details about a specific order |
| /api/orders | POST | { ticketId: string } | SCreate an order to purchase the specified ticket |
| /api/orders/:id | DELETE | - | Cancel the order |