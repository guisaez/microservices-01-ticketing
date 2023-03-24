import express, { Request, Response } from 'express';
import { NotFoundError, requireAuth, BadRequestError, NotAuthorizedError } from '@gstickets2023/common';
import { Order } from '../models/order';
import mongoose from 'mongoose';

const router = express.Router();

router.get('/api/orders/:orderId', requireAuth, async (req: Request, res: Response) => {
    if(!mongoose.isValidObjectId(req.params.orderId)){
        throw new BadRequestError('Invalid orderId');
    }

    const order = await Order.findById(req.params.orderId)

    if(!order){
        throw new NotFoundError();
    }
    
    if(order.userId !== req.currentUser!.id){
        throw new NotAuthorizedError();
    }

    res.send(order);
})

export { router as showOrderRouter };