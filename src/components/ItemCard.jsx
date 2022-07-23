import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useNavigate } from "react-router-dom";
import { useCart } from '../context/CartContext';

function ItemCard({ props }) {
  const { id, item_name, item_desc, item_price } = props
  const navigate = useNavigate()
  const { dispatch } = useCart()

  const onAddToCart = (event) => {
    event.preventDefault();
    dispatch({ type: 'INCREMENT', payload: { id, item_name, item_price, item_count: 1 } })
  }

  return (
    <Card sx={{ maxWidth: 345 }} key={id}>
      <CardMedia
        component="img"
        height="140"
        onClick={() => navigate(`product/${id}`)}
        image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22209%22%20height%3D%22103%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20209%20103%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_181570bdf85%20text%20%7B%20fill%3A%234f9975%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_181570bdf85%22%3E%3Crect%20width%3D%22209%22%20height%3D%22103%22%20fill%3D%22%2363c093%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2278.55078125%22%20y%3D%2256%22%3E209x103%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
        alt="green iguana"
      />
      <CardContent onClick={() => navigate(`product/${id}`)}>
        <Typography gutterBottom variant="h5" component="div">
          {item_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item_desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={onAddToCart}>Add to cart</Button>
        <Typography variant="h5" sx={{ ml: 4 }}>
          ${item_price}
        </Typography>
      </CardActions>
    </Card>
  )
}

export default ItemCard