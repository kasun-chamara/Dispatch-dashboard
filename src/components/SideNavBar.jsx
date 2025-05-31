import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SportsMotorsportsOutlinedIcon from '@mui/icons-material/SportsMotorsportsOutlined';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardOutlinedIcon />, path: '/dashboard' },
  { text: 'Deliveries', icon: <DirectionsBikeIcon />, path: '/deliveries' },
  { text: 'Drivers', icon: <SportsMotorsportsOutlinedIcon />, path: '/drivers' },
  { text: 'Orders', icon: <ReceiptOutlinedIcon />, path: '/orders' },
];

const SideNavBar = ({ width = 220, open = true, mini = false, isMobile = false, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const drawerProps = isMobile
    ? {
        variant: 'temporary',
        open,
        onClose,
      }
    : {
        variant: 'permanent',
        open: true,
      };

  return (
    <Drawer
      anchor="left"
      sx={{
        width: mini ? 60 : width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: mini ? 60 : width,
          boxSizing: 'border-box',
          background: '#fff',
          top: 64,
          height: 'calc(100% - 64px)',
          overflowX: 'hidden',
          transition: 'width 0.2s',
        },
      }}
      {...drawerProps}
    >
      <List>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              sx={{
                borderRadius: '0 20px 20px 0',
                transition: 'background 0.2s',
                justifyContent: mini ? 'center' : 'flex-start',
                px: mini ? 0 : 2,
                background: isActive ? '#e3e8ff' : 'transparent',
                color: isActive ? '#1a237e' : 'inherit',
                '&:hover': {
                  background: '#f4f5f7',
                  color: '#1a237e',
                  cursor: 'pointer',
                },
              }}
            >
              {/* Icon first, then text */}
              <ListItemIcon sx={{ minWidth: 0, mr: !mini ? 2 : 0, justifyContent: 'center' }}>
                {item.icon}
              </ListItemIcon>
              {!mini && <ListItemText primary={item.text} />}
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default SideNavBar;