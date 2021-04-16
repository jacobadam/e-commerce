import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';

const Product = ({product}) => {
  return (
    <Card className={classes.root}>
      <CardMedia classname={classes.media} image='' title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography varient="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography varient="h5" gutterBottom>
            {product.price}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default Product
