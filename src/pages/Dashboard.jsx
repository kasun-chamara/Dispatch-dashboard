import React from 'react';
import Map from '../components/Map';
import OrderRequests from '../components/OrderRequests';
import DriversTable from '../components/DriversTable';

const Dashboard = () => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: 24 }}>
    {/* Map and DriversTable on the right, take remaining space */}
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Map />
      <DriversTable />
    </div>
    {/* OrderRequests on the left */}
    <div style={{ width: 320, minWidth: 260, maxWidth: 400 }}>
      <OrderRequests />
    </div>
    
  </div>
);

export default Dashboard;