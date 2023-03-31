import { OrderStatus } from '@gstickets2023/common';
import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../app';
import { Order } from '../../models/order';
import { stripe } from '../../stripe';
import { Payment } from '../../models/payment';

it('returns 404 when purchasing an order that does not exist', async () => {
    await request(app)
    .post('/api/payments')
    .set('Cookie', global.signin())
    .send({
        token: 'asaasdas',
        orderId: new mongoose.Types.ObjectId().toHexString()
    })
    .expect(404)
})

it('returns a 401 when purchasing an order that does not belong to the user', async () => {
    const order = Order.build({
        userId: new mongoose.Types.ObjectId().toHexString(),
        id: new mongoose.Types.ObjectId().toHexString(),
        price: 20,
        version: 0,
        status: OrderStatus.Created
    })

    await order.save();

    await request(app)
    .post('/api/payments')
    .set('Cookie', global.signin())
    .send({
        token: 'asaasdas',
        orderId: order.id
    })
    .expect(401)
})

it('returns 404 when purchasing an order that does nto exist', async () => {
    const userId = new mongoose.Types.ObjectId().toHexString()

    const order = Order.build({
        userId: userId,
        id: new mongoose.Types.ObjectId().toHexString(),
        price: 20,
        version: 0,
        status: OrderStatus.Cancelled
    })
    await order.save();

    await request(app)
    .post('/api/payments')
    .set('Cookie', global.signin(userId))
    .send({
        token: 'asaasdas',
        orderId: order.id
    })
    .expect(400)

})

it('returns a 201 with valid input', async () => {
    const userId = new mongoose.Types.ObjectId().toHexString()
    
    const price = Math.floor(Math.random() * 100000);
    
    const order = Order.build({
        userId: userId,
        id: new mongoose.Types.ObjectId().toHexString(),
        price,
        version: 0,
        status: OrderStatus.Created
    })
    await order.save();

    await request(app)
    .post('/api/payments')
    .set('Cookie', global.signin(userId))
    .send({
        token: 'tok_visa',
        orderId: order.id
    })
    .expect(201)

    const stripeCharges = await stripe.charges.list({ limit: 50});

    const stripeCharge = stripeCharges.data.find(charge => {
        return charge.amount === price * 100
    })

    expect(stripeCharge).toBeDefined();
    expect(stripeCharge!.currency).toEqual('usd');

    const payment = await Payment.findOne({
        stripeId: stripeCharge!.id,
        orderId: order.id,
    })

    expect(payment).not.toBeNull();
})