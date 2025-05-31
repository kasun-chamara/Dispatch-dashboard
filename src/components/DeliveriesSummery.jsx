import React from 'react';
import deliverySummary from '../mockdata/deliverySummaryData';

const DeliveriesSummery = () => (
  <div
    style={{
      border: '1px solid #eee',
      borderRadius: 7,
      padding: 16,
      marginBottom: 14,
      background: '#F8F4EB',
      fontSize: 13,
      maxWidth: 300,
      width: '100%',
      boxSizing: 'border-box'
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontWeight: 600 }}>
      <span>
        Order ID: <span style={{ color: '#007bff' }}>{deliverySummary.orderId}</span>
      </span>
    </div>
    <div style={{ marginBottom: 4 }}>
      <b>Customer:</b> {deliverySummary.customer}
    </div>
    <div style={{ marginBottom: 4 }}>
      <b>Contact:</b> {deliverySummary.customerContact}
    </div>
    <div style={{ marginBottom: 4 }}>
      <b>Delivery Address:</b> {deliverySummary.deliveryAddress}
    </div>
    <div
      style={{
        borderTop: '1px dashed #bbb',
        margin: '10px 0'
      }}
    ></div>
    <div style={{ marginBottom: 4 }}>
      <b>Order Total:</b> {deliverySummary.orderTotal}
    </div>
    <div style={{ marginBottom: 4 }}>
      <b>Payment Status:</b> {deliverySummary.paymentStatus}
    </div>
    <div style={{ marginBottom: 4 }}>
      <b>Special Instructions:</b> {deliverySummary.specialInstructions}
    </div>
    <div style={{ marginBottom: 4 }}>
      <b>Order Details:</b>
      <ul style={{ margin: '4px 0 0 32px', padding: 0, listStyleType: 'disc' }}>
        <li>
          <b>Items:</b>
          <ul style={{ margin: '4px 0 0 16px', padding: 0, listStyleType: 'disc' }}>
            {deliverySummary.orderDetails.map((item, idx) => (
              <li key={idx}>
                {item.item} <span style={{ color: '#888' }}>x{item.qty}</span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
    <div
      style={{
        borderTop: '1px dashed #bbb',
        margin: '10px 0'
      }}
    ></div>
    <div style={{ marginBottom: 4 }}>
      <b>Driver Name:</b> {deliverySummary.driver.name}
    </div>
    <div style={{ marginBottom: 4 }}>
      <b>Contact:</b> {deliverySummary.driver.contact}
    </div>
    <div style={{ marginBottom: 4 }}>
      <b>Address:</b> {deliverySummary.driver.address}
    </div>
    <div style={{ marginBottom: 4 }}>
      <b>Active Orders:</b> {deliverySummary.driver.activeOrders}
    </div>
    <div style={{ marginBottom: 4 }}>
      <b>Total Orders:</b> {deliverySummary.driver.totalOrders}
    </div>
    <div style={{ marginBottom: 4 }}>
      <b>Payment:</b> {deliverySummary.driver.payment}
    </div>
    <div style={{ marginBottom: 4 }}>
      <b>Vehicle:</b> {deliverySummary.driver.vehicle}
    </div>
    <div style={{ marginBottom: 4 }}>
      <b>Vehicle No:</b> {deliverySummary.driver.vehicleNo}
    </div>
    <div style={{ marginBottom: 4 }}>
      <b>Shift Start at:</b> {deliverySummary.driver.shiftStart}
    </div>
    <div style={{ marginBottom: 4 }}>
      <b>Shift End at:</b> {deliverySummary.driver.shiftEnd}
    </div>
  </div>
);

export default DeliveriesSummery;