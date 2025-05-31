import React, { useState } from 'react';
import DriversTable from '../components/DriversTable';
import DriverDetailsRequests from '../components/DriverDetailsCard';

const Drivers = () => {
  const [search, setSearch] = useState('');

  return (
    <div
      style={{
        display: 'flex',
        gap: 0,
        alignItems: 'flex-start', // Align tops
      }}
    >
      <div style={{ flex: 1, marginRight: 0 }}>
        {/* Top row: Title and Search */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 0 0px 0',
          marginTop: 0 // Remove any top margin
        }}>
          <h4 className="m-0">Drivers</h4>
          <div style={{ position: 'relative', width: 220 }}>
            <span
              style={{
                position: 'absolute',
                left: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#888',
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
              placeholder="Search by driver"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: '100%',
                fontSize: 14,
                padding: '6px 8px 6px 32px',
                borderRadius: 7,
                border: '1px solid #ccc'
              }}
            />
          </div>
        </div>
        {/* Pass search to DriversTable if needed */}
        <DriversTable search={search} />
      </div>
      <DriverDetailsRequests />
    </div>
  );
};

export default Drivers;