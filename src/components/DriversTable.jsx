import React from 'react';
import driverData from '../mockdata/driverData';
import SettingsIcon from '@mui/icons-material/Settings';
import { useTheme } from '@mui/material/styles';

const getStatusStyle = (status, isDark) => {
  if (status === "Ready") {
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
  if (status === "En Route") {
    return {
      background: isDark ? 'rgba(82,196,26,0.12)' : '#f8ffef',
      color: '#52C41A',
      borderRadius: '7px',
      padding: '5px 12px',
      width: '100px',
      minWidth: 80,
      display: 'inline-block',
      textAlign: 'center',
      border: '2px solid #52C41A'
    };
  }
  // Default style
  return {
    minWidth: 80,
    display: 'inline-block',
    textAlign: 'center',
    width: '100px'
  };
};

const DriversTable = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const cardBg = isDark
    ? 'rgba(11,36,71,0.55)'
    : 'rgba(255,255,255,0.85)';
  const rowBg = 'transparent';

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
          <div style={{ flex: 1, textAlign: 'center' }}>Active Orders</div>
          <div style={{ flex: 1, textAlign: 'center' }}>Total Orders</div>
          <div style={{ flex: 1, textAlign: 'center' }}>Shift END</div>
          <div style={{ flex: 1, textAlign: 'center' }}></div>
          <div style={{ flex: 0.5, textAlign: 'center' }}></div>
        </div>
        {driverData.map((driver, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 16px',
              borderBottom:
                idx !== driverData.length - 1
                  ? isDark
                    ? '1px solid #233e7c'
                    : '1px solid #eee'
                  : 'none',
              background: rowBg,
              color: isDark ? '#fff' : '#222'
            }}
          >
            <div style={{ flex: 2 }}>{driver.name}</div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span style={getStatusStyle(driver.status, isDark)}>
                {driver.status}
              </span>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>{driver.activeOrders}</div>
            <div style={{ flex: 1, textAlign: 'center' }}>{driver.totalOrders}</div>
            <div style={{ flex: 1, textAlign: 'center' }}>{driver.shiftEnd}</div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <button
                className="btn btn-primary btn-sm"
                style={{
                  width: '100px',
                  minWidth: '100px',
                  padding: '5px 12px',
                  borderRadius: '7px'
                }}
              >
                Assign
              </button>
            </div>
            <div style={{ flex: 0.5, textAlign: 'center' }}>
              <SettingsIcon style={{ color: isDark ? '#bbb' : '#888', cursor: 'pointer' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriversTable;