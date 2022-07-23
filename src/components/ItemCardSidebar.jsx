import { Box, Button, Card, CardContent, CardMedia, Divider, Stack, Typography } from '@mui/material'
import { useCart } from '../context/CartContext'

function ItemCardSidebar({ props }) {
  const { id, item_name, item_price, item_count } = props
  const { dispatch } = useCart()

  return (
    <Card sx={{ display: "flex", width: 385 }} raised={false} key={id}>
      <Box sx={{ alignItems: 'center', display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 120, height: 120, pl: 2 }}
          image="https://via.placeholder.com/120x120/84c289/57e6ad"
          alt={`${item_name}_120x120_images`}
        />
      </Box>
      <CardContent>
        <Stack
          direction="column"
          justifyContent="flex-end"
          alignItems="flex-start"
          spacing={0.5}
        >
          <Typography noWrap sx={{ fontWeight: "bold" }}>
            {item_name}
          </Typography>
          <Typography noWrap variant="caption">
            {item_count} items
          </Typography>
          <Typography noWrap variant="subtitle1">
            Rp.{item_count * item_price}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Button onClick={() => dispatch({ type: 'DECREMENT', payload: props })}>-</Button>
          <Button onClick={() => dispatch({ type: 'INCREMENT', payload: props })}>+</Button>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default ItemCardSidebar