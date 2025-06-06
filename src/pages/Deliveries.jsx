import React from 'react';
import DeliveriesTable from '../components/DeliveriesTable';
import DeliveriesSummery from '../components/DeliveriesSummery';
import { useTheme } from '@mui/material/styles';

const Deliveries = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <div>
      <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          {/* Heading and search bar in the same row, INSIDE the table container */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
            <h4 style={{ margin: 0, flex: 1, color: isDark ? '#fff' : '#222' }}>Deliveries</h4>
            <div style={{ position: 'relative', width: 250 }}>
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
                placeholder="Search deliveries"
                style={{
                  width: '100%',
                  fontSize: 14,
                  padding: '6px 8px 6px 32px',
                  borderRadius: 7,
                  border: isDark ? '1px solid #3556a3' : '1px solid #ccc',
                  background: isDark ? 'rgba(11,36,71,0.7)' : '#fff',
                  color: isDark ? '#fff' : '#222',
                  transition: 'background 0.3s, color 0.3s, border 0.3s'
                }}
              />
            </div>
          </div>
          <DeliveriesTable />
        </div>
        <div style={{ flexShrink: 0 }}>
          <DeliveriesSummery />
        </div>
      </div>
    </div>
  );
};

export default Deliveries;