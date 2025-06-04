import React, { useState } from 'react';
import { Header, SideNavBar } from '../components';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';

const drawerWidth = 220;

// Accept onToggleTheme as a prop
const MainLayout = ({ children, onToggleTheme }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [mini, setMini] = useState(false);
  const location = useLocation();

  const handleSidebarToggle = () => {
    if (isMobile) {
      setSidebarOpen((prev) => !prev);
    } else {
      setMini((prev) => !prev);
    }
  };

  React.useEffect(() => {
    setSidebarOpen(!isMobile);
    setMini(false);
  }, [isMobile]);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        onMenuClick={handleSidebarToggle}
        isMobile={isMobile}
        mini={mini}
        location={location}
        onToggleTheme={onToggleTheme}
      />
      <div style={{ display: 'flex', flex: 1 }}>
        <SideNavBar
          width={drawerWidth}
          open={sidebarOpen}
          mini={mini}
          isMobile={isMobile}
          onClose={() => setSidebarOpen(false)}
        />
        <main
          style={{
            flex: 1,
            padding: '24px',
            paddingTop: 88, // 64px header + 24px
            background: theme.palette.mode === 'dark' ? '#1e2026' : '#fff',
            transition: 'margin-left 0.2s',
            minHeight: 0,
            overflow: 'auto',
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;