import React from 'react';
import driverData from '../mockdata/driverData';
import SettingsIcon from '@mui/icons-material/Settings';

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

const centerCell = {
  flex: 1,
  textAlign: 'center'
};

const statusCell = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const assignCell = {
  flex: 1,
  textAlign: 'center'
};

const iconCell = {
  flex: 0.5,
  textAlign: 'center'
};

const assignButtonStyle = {
  width: '100px',
  minWidth: '100px',
  padding: '5px 12px',
  borderRadius: '7px'
};

const getStatusStyle = (status) => {
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
      background: '#f8ffef',
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

const DriversTable = () => (
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
        <div style={centerCell}>Active Orders</div>
        <div style={centerCell}>Total Orders</div>
        <div style={centerCell}>Shift END</div>
        <div style={assignCell}></div>
        <div style={iconCell}></div> {/* Add header for icon column */}
      </div>
      {driverData.map((driver, idx) => (
        <div
          key={idx}
          style={{
            ...rowStyle,
            borderBottom: idx !== driverData.length - 1 ? '1px solid #eee' : 'none'
          }}
        >
          <div style={{ flex: 2 }}>{driver.name}</div>
          <div style={statusCell}>
            <span style={getStatusStyle(driver.status)}>
              {driver.status}
            </span>
          </div>
          <div style={centerCell}>{driver.activeOrders}</div>
          <div style={centerCell}>{driver.totalOrders}</div>
          <div style={centerCell}>{driver.shiftEnd}</div>
          <div style={assignCell}>
            <button className="btn btn-primary btn-sm" style={assignButtonStyle}>
              Assign
            </button>
          </div>
          <div style={iconCell}>
            <SettingsIcon style={{ color: '#888', cursor: 'pointer' }} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default DriversTable;