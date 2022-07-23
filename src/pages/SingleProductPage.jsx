import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, Typography, Box, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

import { db } from '../firebase'

function SingleProductPage() {
  const { productId } = useParams()
  const [product, setProduct] = useState()

  const fetching = async (id) => {
    // get data by id (stupid, complicated, undocumented firebase )
    setProduct(await (await db.collection('items').doc(id).get()).data())
  }

  useEffect(() => {
    fetching(productId)
  }, [productId])

  if (!product) return <h1>No data</h1>

  return (
    <>
      <Container fixed>
        <Grid container sx={{ mt: 4 }} justifyContent="center" spacing={2}>
          <Grid item lg={4}>
            <Box
              justifyContent="center"
              sx={{
                width: 350,
                height: 350,
                backgroundColor: 'primary.dark',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          </Grid>
          <Grid item lg={5}>
            <Typography variant="h5" component="h5">
              {product.item_name}
            </Typography>
            <Typography variant="h4" component="h4">
              ${product.item_price}
            </Typography>
            <Typography variant="h5" component="h5">
              Description: {product.item_desc}
            </Typography>
          </Grid>
          <Grid item lg={3}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={12}
                label="Age"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={8}>
                <Button variant="outlined" fullWidth>Contained</Button>
              </Grid>
              <Grid item xs={8} >
                <Button variant="contained" fullWidth>Contained</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default SingleProductPage