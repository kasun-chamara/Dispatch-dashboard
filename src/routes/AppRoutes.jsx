import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Drivers from '../pages/Drivers';
import Deliveries from '../pages/Deliveries';
import Orders from '../pages/Orders';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/dashboard" />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/drivers" element={<Drivers />} />
    <Route path="/deliveries" element={<Deliveries />} />
    <Route path="/orders" element={<Orders />} />
  </Routes>
);

export default AppRoutes;