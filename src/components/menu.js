import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const MenuComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
           <MenuItem onClick={handleMenuClose}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Strona glowna</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/gallery" style={{ textDecoration: 'none', color: 'inherit' }}>Galeria</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/news" style={{ textDecoration: 'none', color: 'inherit' }}>Aktualności</Link>
            </MenuItem>
          </Menu>
          <Typography variant="h6">Menu</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuComponent;