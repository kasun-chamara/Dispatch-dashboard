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
import { useTheme } from '@mui/material/styles';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardOutlinedIcon />, path: '/dashboard' },
  { text: 'Deliveries', icon: <DirectionsBikeIcon />, path: '/deliveries' },
  { text: 'Drivers', icon: <SportsMotorsportsOutlinedIcon />, path: '/drivers' },
  { text: 'Orders', icon: <ReceiptOutlinedIcon />, path: '/orders' },
];

const SideNavBar = ({ width = 220, open = true, mini = false, isMobile = false, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

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
          background: theme.palette.mode === 'dark' ? '#1e2026' : '#fff',
          color: theme.palette.mode === 'dark' ? '#fff' : 'inherit',
          top: 64,
          height: 'calc(100% - 64px)',
          overflowX: 'hidden',
          transition: 'width 0.2s, background 0.2s',
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
                background: isActive
                  ? theme.palette.mode === 'dark'
                    ? '#19376D'
                    : '#e3e8ff'
                  : 'transparent',
                color: isActive
                  ? theme.palette.mode === 'dark'
                    ? '#fff'
                    : '#1a237e'
                  : 'inherit',
                '&:hover': {
                  background: theme.palette.mode === 'dark' ? '#233e7c' : '#f4f5f7',
                  color: '#1a237e',
                  cursor: 'pointer',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: !mini ? 2 : 0, justifyContent: 'center', color: 'inherit' }}>
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