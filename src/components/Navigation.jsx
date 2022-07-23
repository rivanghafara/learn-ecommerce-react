import { AppBar, Box, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/CartContext';
import { SidebarContext } from '../context/SidebarContext';
import { useContext } from 'react';

function Navigation() {
  const { state } = useCart()
  const { isDrawerOpen, setIsDrawerOpen } = useContext(SidebarContext)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Store
          </Typography>
          <IconButton onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
            <Badge badgeContent={state.count} color="error" sx={{ mr: 2 }} >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box >
  )
}

export default Navigation