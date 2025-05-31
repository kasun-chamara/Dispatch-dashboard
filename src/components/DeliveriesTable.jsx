import React from 'react';
import deliveriesData from '../mockdata/deliveriesData';

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  background: '#f8f9fa',
  fontWeight: 'bold',
  padding: '20px 16px',
  borderBottom: '2px solid #eee'
};

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '12px 16px',
  borderBottom: '1px solid #eee'
};

const centerCell = { flex: 1, textAlign: 'center' };
const statusCell = { flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' };

const getStatusStyle = (status) => {
  if (status === "Delivered") {
    return {
      background: '#52C41A',
      borderRadius: '7px',
      padding: '5px 12px',
      color: '#fff',
      minWidth: 80,
      display: 'inline-block',
      textAlign: 'center',
      width: '100px'
    };
  }
  if (status === "Pending") {
    return {
      background: '#FFC507',
      borderRadius: '7px',
      padding: '5px 12px',
      color: '#fff',
      minWidth: 80,
      display: 'inline-block',
      textAlign: 'center',
      width: '100px'
    };
  }
  return {
    minWidth: 80,
    display: 'inline-block',
    textAlign: 'center',
    width: '100px'
  };
};

const DeliveriesTable = () => (
  <div
    className="mt-4"
    style={{
      width: '100%',
      borderRadius: 5,
      overflow: 'hidden',
      background: '#fff',
      margin: 10
    }}
  >
    <div>
      <div style={headerStyle}>
        <div style={{ flex: 2 }}>Driver Name</div>
        <div style={statusCell}>Status</div>
        <div style={centerCell}>Order ID</div>
        <div style={centerCell}>No of items</div>
        <div style={centerCell}>Payment</div>
        <div style={centerCell}>Amount (£)</div>
        <div style={centerCell}>Date</div>
      </div>
      {deliveriesData.map((delivery, idx) => (
        <div
          key={idx}
          style={{
            ...rowStyle,
            borderBottom: idx !== deliveriesData.length - 1 ? '1px solid #eee' : 'none'
          }}
        >
          <div style={{ flex: 2 }}>{delivery.driverName}</div>
          <div style={statusCell}>
            <span style={getStatusStyle(delivery.status)}>
              {delivery.status}
            </span>
          </div>
          <div style={centerCell}>{delivery.orderId}</div>
          <div style={centerCell}>{delivery.noOfItems}</div>
          <div style={centerCell}>{delivery.payment}</div>
          <div style={centerCell}>{delivery.amount}</div>
          <div style={centerCell}>{delivery.date}</div>
        </div>
      ))}
    </div>
  </div>
);

export default DeliveriesTable;