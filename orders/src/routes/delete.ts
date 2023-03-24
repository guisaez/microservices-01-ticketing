import express, { Request, Response } from 'express';
import { BadRequestError, NotAuthorizedError, NotFoundError, requireAuth } from '@gstickets2023/common';
import { Order, OrderStatus }  from '../models/order';
import mongoose from 'mongoose';
import { OrderCancelledPublisher } from '../events/publishers/order-cancelled-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.delete('/api/orders/:orderId', async (req: Request, res: Response) => {

    const { orderId } = req.params;
    if(!mongoose.isValidObjectId(orderId)){
        throw new BadRequestError('Invalid orderId');
    }

    const order = await Order.findById(orderId).populate('ticket');

    if(!order){
        throw new NotFoundError();
    }
    if(order.userId !== req.currentUser!.id) {
        throw new NotAuthorizedError();
    }

    order.status = OrderStatus.Cancelled;
    await order.save();

    new OrderCancelledPublisher(natsWrapper.client).publish({
        id: order.id,
        ticket: {
            id: order.ticket.id
        },
        version: order.version
    })

    res.status(204).send(order);
})

export { router as deleteOrderRouter };