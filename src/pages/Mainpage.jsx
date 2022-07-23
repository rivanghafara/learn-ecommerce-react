import React, { useEffect, useState } from 'react'
import ItemCard from '../components/ItemCard'
import { Grid, Box } from '@mui/material'

import { db } from '../firebase'


function Mainpage() {
  const [items, setItems] = useState()

  const fetching = async () => {
    await db.collection('items').onSnapshot(snapshot => (
      setItems(snapshot.docs.map(doc => ({
        id: doc.id,
        item_name: doc.data().item_name,
        item_desc: doc.data().item_desc,
        item_price: doc.data().item_price
      })))
    ))
  }

  useEffect(() => {
    fetching()
  }, [])

  if (!items) return <h2 className="m-4">No Data...</h2>

  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Grid container spacing={{ xs: 2, md: 3, mt: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          items.map(item => (
            <Grid item xs={3} key={item.id}>
              <ItemCard props={item} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}
export default Mainpage