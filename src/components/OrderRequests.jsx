import React from 'react';
import orderCards from '../mockdata/orderCard';
import driverData from '../mockdata/driverData';
import { useTheme } from '@mui/material/styles';

const OrderCard = ({ order, isDark }) => (
  <div
    style={{
      border: isDark ? '1px solid rgba(255,255,255,0.18)' : '1px solid #eee',
      borderRadius: 14,
      padding: 16,
      marginBottom: 18,
      background: isDark
        ? 'rgba(11,36,71,0.55)'
        : 'rgba(248,244,235,0.75)',
      boxShadow: isDark
        ? '0 4px 32px 0 rgba(11,36,71,0.25)'
        : '0 4px 32px 0 rgba(0,0,0,0.08)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      fontSize: 13,
      color: isDark ? '#fff' : '#222',
      transition: 'background 0.3s, color 0.3s, border 0.3s'
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontWeight: 600 }}>
      <span>
        Order ID: <span style={{ color: '#007bff' }}>{order.orderId}</span>
      </span>
      <span style={{ color: isDark ? '#bbb' : '#888', fontWeight: 400 }}>{order.time}</span>
    </div>
    <div style={{ marginBottom: 4 }}>
      <b>Customer:</b> {order.customer}
    </div>
    <div style={{ marginBottom: 4 }}>
      <b>Contact:</b> {order.customerContact}
    </div>
    <div style={{ marginBottom: 4 }}>
      <b>Delivery Address:</b> {order.deliveryAddress}
    </div>
    <div
      style={{
        borderTop: isDark ? '1px dashed #3556a3' : '1px dashed #bbb',
        margin: '10px 0'
      }}
    ></div>
    <div style={{ marginBottom: 4 }}>
      <b>Order Total:</b> {order.orderTotal}
    </div>
    <div style={{ marginBottom: 4 }}>
      <b>Payment Status:</b> {order.paymentStatus}
    </div>
    <div style={{ marginBottom: 4 }}>
      <b>Special Instructions:</b> {order.specialInstructions}
    </div>
    <div style={{ marginBottom: 4 }}>
      <b>Order Details:</b>
      <ul style={{ margin: '4px 0 0 32px', padding: 0, listStyleType: 'disc' }}>
        <li>
          <b>Items:</b>
          <ul style={{ margin: '4px 0 0 16px', padding: 0, listStyleType: 'disc' }}>
            {order.orderDetails.map((item, idx) => (
              <li key={idx}>
                {item.item} <span style={{ color: isDark ? '#bbb' : '#888' }}>x{item.qty}</span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: 10, gap: 8 }}>
        <select
          style={{
            flex: 1,
            padding: '4px 8px',
            borderRadius: 5,
            border: isDark ? '1px solid #3556a3' : '1px solid #bbb',
            fontSize: 13,
            background: isDark ? 'rgba(11,36,71,0.7)' : '#fff',
            color: isDark ? '#fff' : '#222'
          }}
          defaultValue=""
        >
          <option value="" disabled>
            Select driver
          </option>
          {driverData.map((driver, idx) => (
            <option key={idx} value={driver.name}>
              {driver.name}
            </option>
          ))}
        </select>
        <button
          style={{
            padding: '5px 16px',
            borderRadius: 5,
            background: '#007bff',
            color: '#fff',
            border: 'none',
            fontSize: 13,
            cursor: 'pointer'
          }}
        >
          Assign
        </button>
      </div>
    </div>
  </div>
);

const OrderRequests = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <div
      style={{
        maxWidth: 340,
        width: '100%',
        flex: '0 0 340px',
        minHeight: 575,
        background: isDark
          ? 'rgba(11,36,71,0.7)'
          : 'rgba(255,255,255,0.85)',
        borderRadius: 10,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        boxShadow: isDark
          ? '0 4px 32px 0 rgba(11,36,71,0.25)'
          : '0 4px 32px 0 rgba(0,0,0,0.08)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'background 0.3s, color 0.3s'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <h6 className="mb-0" style={{ flex: 1, color: isDark ? '#fff' : '#222' }}>Order Requests</h6>
        <div style={{ position: 'relative', width: 150 }}>
          <span
            style={{
              position: 'absolute',
              left: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              color: isDark ? '#bbb' : '#888',
              pointerEvents: 'none',
              zIndex: 2
            }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 18 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.242 1.106a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search by order"
            style={{
              width: '100%',
              fontSize: 14,
              padding: '6px 8px 6px 32px',
              borderRadius: 7,
              border: isDark ? '1px solid #3556a3' : '1px solid #ccc',
              background: isDark ? 'rgba(11,36,71,0.7)' : '#fff',
              color: isDark ? '#fff' : '#222'
            }}
          />
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {orderCards.map((order, idx) => (
          <OrderCard key={order.orderId} order={order} isDark={isDark} />
        ))}
      </div>
    </div>
  );
};

export default OrderRequests;