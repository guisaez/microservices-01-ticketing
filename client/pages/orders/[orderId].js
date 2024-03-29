import { useEffect, useState } from "react";
import  StripeCheckout  from 'react-stripe-checkout';
import useRequest from "../../hooks/use-request";
import Router from "next/router";

const OrderShow = ({ order, currentUser }) => {
    const [timeLeft, setTimeLeft] = useState(0);

    const { doRequest, errors } = useRequest({
        url: '/api/payments',
        method: 'post',
        body: {
            orderId: order.id
        },
        onSuccess: (payment) => {
            Router.push('/orders')
        }
    })

    useEffect(() => {
        const findTimeLeft = () => {
            const msLeft = new Date(order.expiresAt) - new Date();
            setTimeLeft(msLeft / 1000)
        };

        findTimeLeft();
        const timerId = setInterval(findTimeLeft, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, [order])
    
    if(timeLeft < 0){
        return (
            <div>
                Order Expired
            </div>
        )
    }

    
    
    return (
        <div>
            <div>
                Order Expires in {parseInt(timeLeft/ 60)} : {parseInt(timeLeft % 60)}
            </div>
            <StripeCheckout 
                token =  {( { id } ) => {
                    doRequest({ token: id })
                }}
                stripeKey='pk_test_51Mr0ytLpkiXGmtRLfvAeDk8gjMfpBGtJ6TXhpG5aXRVla1apUnEN5dBuVUfcnCsRWMWEZ3iN2G4CgqHPrpnePkZf00O99DeaVR'
                key='pk_test_51Mr0ytLpkiXGmtRLfvAeDk8gjMfpBGtJ6TXhpG5aXRVla1apUnEN5dBuVUfcnCsRWMWEZ3iN2G4CgqHPrpnePkZf00O99DeaVR'
                amount={order.ticket.price * 100}
                email={currentUser.email}
                currency="USD"
            />
            {errors}
        </div>
    )
}

OrderShow.getInitialProps = async (context, client) => {
    const { orderId } = context.query;

    const { data } = await client.get(`/api/orders/${orderId}`);

    return { order: data };
}

export default OrderShow;