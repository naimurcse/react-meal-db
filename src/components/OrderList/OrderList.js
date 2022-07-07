import React from 'react';
import './OrderList.css';

const OrderList = (props) => {
    const { orders } = props;
    console.log(orders);

    //! Find total quantity using reduce
    let count = orders.reduce((previousValue,currentValue) => previousValue + currentValue.quantity,0);
    
    //! Find total quantity using for...of
    // let count = 0;
    // for(const order of orders){
    //     count = order.quantity + count;
    // }
    
    return (
        <div className='order-container'>
            <h2>Order List</h2>
            <h4>Items Ordered: {count}</h4>
        </div>
    );
};

export default OrderList;