import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {useState} from 'react';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Box from '@mui/material/Box';
import HomePage from '../../pages/Home';
import ManualPage from '../../pages/Manual';

interface MenuItem {
  label: string;
  path: string;
  icon: React.ReactElement;
}

const Navigation: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const menuItems: MenuItem[] = [
    {label: 'Home', path: '/', icon: <RocketLaunchIcon />},
    {label: 'Manual Table', path: '/about', icon: <RocketLaunchIcon />},
    {label: 'Contact', path: '/contact', icon: <RocketLaunchIcon />},
  ];

  return (
    <div>
      <Drawer variant="permanent" anchor="left">
        <List>
          {menuItems.map(item => (
            <ListItem key={item.label} onClick={() => handlePageChange(item.label)}>
              <ListItemText primary={item.label} />
              <Box marginLeft={1}>
                <RocketLaunchIcon />
              </Box>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main>
        {currentPage === 'Home' && <HomePage />}
        {currentPage === 'Manual Table' && <ManualPage />}
      </main>
    </div>
  );
};

export default Navigation;
