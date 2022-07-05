import React from 'react';
import './OrderList.css';

const OrderList = (props) => {
    const { orders } = props;

    
    return (
        <div className='order-container'>
            <h2>Order List</h2>
            <h4>Items Ordered: {orders.length}</h4>
        </div>
    );
};

export default OrderList;