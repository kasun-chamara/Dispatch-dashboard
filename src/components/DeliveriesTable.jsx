import React from 'react';
import deliveriesData from '../mockdata/deliveriesData';
import { useTheme } from '@mui/material/styles';

const getStatusStyle = (status, isDark) => {
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

const DeliveriesTable = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const cardBg = isDark
    ? 'rgba(11,36,71,0.55)'
    : 'rgba(255,255,255,0.85)';

  return (
    <div
      className="mt-4"
      style={{
        width: '100%',
        borderRadius: 12,
        overflow: 'hidden',
        background: cardBg,
        margin: 10,
        boxShadow: isDark
          ? '0 4px 32px 0 rgba(11,36,71,0.25)'
          : '0 4px 32px 0 rgba(0,0,0,0.08)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: isDark ? '1px solid rgba(255,255,255,0.18)' : '1px solid #eee',
        transition: 'background 0.3s, color 0.3s, border 0.3s'
      }}
    >
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: isDark ? 'rgba(11,36,71,0.7)' : '#f8f9fa',
            fontWeight: 'bold',
            padding: '20px 16px',
            borderBottom: isDark ? '1.5px solid #233e7c' : '2px solid #eee',
            color: isDark ? '#fff' : '#222'
          }}
        >
          <div style={{ flex: 2 }}>Driver Name</div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Status</div>
          <div style={{ flex: 1, textAlign: 'center' }}>Order ID</div>
          <div style={{ flex: 1, textAlign: 'center' }}>No of items</div>
          <div style={{ flex: 1, textAlign: 'center' }}>Payment</div>
          <div style={{ flex: 1, textAlign: 'center' }}>Amount (£)</div>
          <div style={{ flex: 1, textAlign: 'center' }}>Date</div>
        </div>
        {deliveriesData.map((delivery, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 16px',
              borderBottom:
                idx !== deliveriesData.length - 1
                  ? isDark
                    ? '1px solid #233e7c'
                    : '1px solid #eee'
                  : 'none',
              background: 'transparent',
              color: isDark ? '#fff' : '#222'
            }}
          >
            <div style={{ flex: 2 }}>{delivery.driverName}</div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span style={getStatusStyle(delivery.status, isDark)}>
                {delivery.status}
              </span>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>{delivery.orderId}</div>
            <div style={{ flex: 1, textAlign: 'center' }}>{delivery.noOfItems}</div>
            <div style={{ flex: 1, textAlign: 'center' }}>{delivery.payment}</div>
            <div style={{ flex: 1, textAlign: 'center' }}>{delivery.amount}</div>
            <div style={{ flex: 1, textAlign: 'center' }}>{delivery.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveriesTable;