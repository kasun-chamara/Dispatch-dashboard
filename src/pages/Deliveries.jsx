import React from 'react';
import DeliveriesTable from '../components/DeliveriesTable';
import DeliveriesSummery from '../components/DeliveriesSummery';

const Deliveries = () => (
  <div>
    {/* Page heading only */}
    <h2 style={{ marginBottom: 24 }}>Deliveries</h2>
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        {/* Search bar at the top right of the table */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
          <div style={{ position: 'relative', width: 250 }}>
            <span
              style={{
                position: 'absolute',
                left: 8,
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
              placeholder="Search deliveries"
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
        <DeliveriesTable />
      </div>
      <DeliveriesSummery />
    </div>
  </div>
);

export default Deliveries;