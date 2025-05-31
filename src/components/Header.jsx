import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SportsMotorsportsOutlinedIcon from '@mui/icons-material/SportsMotorsportsOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import Box from '@mui/material/Box';

const pageMeta = {
  '/dashboard': { icon: <DashboardOutlinedIcon sx={{ mr: 1 }} />, name: 'Dashboard' },
  '/drivers': { icon: <SportsMotorsportsOutlinedIcon sx={{ mr: 1 }} />, name: 'Drivers' },
  '/deliveries': { icon: <DirectionsCarOutlinedIcon sx={{ mr: 1 }} />, name: 'Deliveries' },
  '/orders': { icon: <ReceiptOutlinedIcon sx={{ mr: 1 }} />, name: 'Orders' },
};

const Header = ({ onMenuClick, isMobile, mini, location }) => {
  const meta = pageMeta[location.pathname] || { icon: null, name: '' };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#f4f5f7',
        color: '#222',
        zIndex: 1201,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      <Toolbar>
        <Box onClick={onMenuClick} sx={{ cursor: 'pointer', mr: 1 }}>
          {isMobile ? (
            <MenuOutlinedIcon />
          ) : mini ? (
            <MenuOutlinedIcon />
          ) : (
            <ArrowBackIosNewOutlinedIcon />
          )}
        </Box>
        {meta.icon}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {meta.name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AccountCircleIcon sx={{ mr: 2 }} />
          <Brightness6Icon sx={{ mr: 2 }} />
        </Box>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mr: 2 }}>
          Company Name
        </Typography>
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;