import React from 'react';
import DeliveriesTable from '../components/DeliveriesTable';
import DeliveriesSummery from '../components/DeliveriesSummery';

const Deliveries = () => (
  <div>
    <h2>Deliveries</h2>
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      
      <div style={{ flex: 1 }}>
        <DeliveriesTable />
      </div>
      <DeliveriesSummery />
    </div>
  </div>
);

export default Deliveries;