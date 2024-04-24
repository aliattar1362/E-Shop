import {CardMedia, CardContent, Typography, CardActions, Button, Grid, IconButton, Avatar, CardHeader, Card} from "@mui/material"
import { ProductType } from "../../../../misc/type"
import { red } from "@mui/material/colors"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../../../reduxToolkit/slices/cartSlice";

interface Props {
    product: ProductType;
}


export default function ProductCard({product}: Props) {
    const dispatch = useDispatch()

    const addToCart = (product: ProductType) => {
    // dispatch an addItem action
    dispatch(addItem(product))
  }

  return (
    <div>
     <Card >
           <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {product.title[0]}
          </Avatar>
        }

        title={product.title}
      />
      
         <CardMedia
        sx={{ height: 140 , backgroundSize: "contain"}}
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5">
          €{product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{height: "150px", overflow: "auto"}}>
                    {product.category}/{product.description}
        </Typography>
      </CardContent>
      <CardActions >

        <Button size="small" component={Link} to={"/cart"} onClick={() => addToCart(product)}>Add to cart</Button>
        <Button size="small" component={Link} to={`/products/${product.id}`}>View</Button>
   
      </CardActions>
      </Card>
    </div>
  )
}
