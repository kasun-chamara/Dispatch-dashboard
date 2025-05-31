import React from 'react';
import { Header, SideNavBar, Map } from '../components';

const AllComponents = () => (
  <div style={{ padding: 24 }}>
    <h2>All Components Demo</h2>
    <hr />

    <h3>Header Component</h3>
    <div style={{ border: '1px solid #eee', marginBottom: 24 }}>
      <Header />
    </div>

    <h3>SideNavBar Component</h3>
    <div style={{ border: '1px solid #eee', marginBottom: 24, height: 300, display: 'flex' }}>
      <SideNavBar />
    </div>

    <h3>Map Component</h3>
    <div style={{ border: '1px solid #eee', marginBottom: 24 }}>
      <Map />
    </div>
  </div>
);

export default AllComponents;