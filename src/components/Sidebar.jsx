import { Box, Button, Drawer, Stack, Typography } from '@mui/material'
import { useContext } from 'react';
import { useCart } from '../context/CartContext';
import { SidebarContext } from '../context/SidebarContext';
import ItemCardSidebar from './ItemCardSidebar';


function Sidebar() {
  const { isDrawerOpen, setIsDrawerOpen } = useContext(SidebarContext)
  const { state } = useCart()

  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 400 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
        </Box>
        <Box sx={{ m: 2 }}>
          <Stack direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}>
            <Typography sx={{ fontWeight: "bold" }}>
              Your cart
            </Typography>
            <Button>
              See all
            </Button>
          </Stack>
        </Box>
        {
          state.items && state.items.length < 1 ?
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography>Your cart is empty</Typography>
            </Box> : null
        }
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
          sx={{ mb: 1, ml: 1 }}
        >
          {
            state.items.map(item => (
              <ItemCardSidebar props={item} key={item.id} />
            ))
          }
        </Stack>
      </Drawer>
    </div >
  );
}

export default Sidebar