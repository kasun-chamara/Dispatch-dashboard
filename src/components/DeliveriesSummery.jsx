import React from 'react';
import deliverySummary from '../mockdata/deliverySummaryData';
import { useTheme } from '@mui/material/styles';

const trackingSteps = [
  { label: 'Assigned', time: 'May 22, 2025 13:37' },
  { label: 'Picked Up', time: 'May 22, 2025 13:37' },
  { label: 'En-route', time: 'May 22, 2025 13:37' },
  { label: 'At the door', time: 'N/A' },
  { label: 'Delivered', time: 'N/A' }
];

const DeliveriesSummery = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <div
      style={{
        maxWidth: 320,
        width: '100%',
        flex: '0 0 320px',
        minHeight: 575,
        background: isDark ? 'rgba(11,36,71,0.55)' : 'rgba(255,255,255,0.85)',
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
        border: isDark ? '1px solid rgba(255,255,255,0.18)' : '1px solid #eee',
        transition: 'background 0.3s, color 0.3s, border 0.3s'
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10, textAlign: 'center', color: isDark ? '#fff' : '#222' }}>
        Order Details
      </div>
      <div
        style={{
          border: isDark ? '1px solid #233e7c' : '1px solid #eee',
          borderRadius: 7,
          padding: 16,
          marginBottom: 14,
          background: isDark ? 'rgba(11,36,71,0.7)' : '#F8F4EB',
          fontSize: 13,
          width: '100%',
          boxSizing: 'border-box',
          marginTop: 6,
          color: isDark ? '#fff' : '#222'
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
            borderTop: isDark ? '1px dashed #3556a3' : '1px dashed #bbb',
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
                    {item.item} <span style={{ color: isDark ? '#bbb' : '#888' }}>x{item.qty}</span>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <div
          style={{
            borderTop: isDark ? '1px dashed #3556a3' : '1px dashed #bbb',
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
        <div
          style={{
            borderTop: isDark ? '1px dashed #3556a3' : '1px dashed #bbb',
            margin: '10px 0'
          }}
        ></div>
        <div style={{ marginBottom: 4 }}>
          <b>Shift Start at:</b> {deliverySummary.driver.shiftStart}
        </div>
        <div style={{ marginBottom: 4 }}>
          <b>Shift End at:</b> {deliverySummary.driver.shiftEnd}
        </div>
        {/* Tracking Path - Vertical */}
        <div style={{ marginTop: 18 }}>
          <div style={{ fontWeight: 600, marginBottom: 10, textAlign: 'center', color: isDark ? '#fff' : '#222' }}>Tracking</div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative' }}>
            {trackingSteps.map((step, idx, arr) => (
              <div key={step.label} style={{ display: 'flex', alignItems: 'flex-start', position: 'relative', minHeight: 48 }}>
                {/* Circle */}
                <div style={{
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: idx <= 2 ? '#FFAE00' : '#ccc',
                  border: '2px solid #fff',
                  boxShadow: idx <= 2 ? '0 0 0 2px #FFAE00' : 'none',
                  marginRight: 12,
                  marginTop: 2,
                  zIndex: 1
                }}></div>
                {/* Step Content */}
                <div>
                  <div style={{ fontSize: 13, fontWeight: idx <= 2 ? 600 : 400, color: idx <= 2 ? '#007bff' : (isDark ? '#bbb' : '#888') }}>
                    {step.label}
                  </div>
                  <div style={{ fontSize: 11, color: isDark ? '#bbb' : '#888', marginTop: 2 }}>{step.time}</div>
                </div>
                {/* Vertical Line */}
                {idx < arr.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    left: 8,
                    top: 22,
                    width: 2,
                    height: 32,
                    background: idx < 2 ? '#FFAE00' : '#ccc',
                    zIndex: 0
                  }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveriesSummery;