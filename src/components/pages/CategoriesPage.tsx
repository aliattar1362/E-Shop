import { useState } from 'react';
import { useFetchAllProductsQuery } from '../../reduxToolkit/productQuery';
import { ProductType } from '../../misc/type';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { addToFavorites } from '../../reduxToolkit/slices/favoritesSlice';
import { AppState } from '../../reduxToolkit/store';
// Styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import { Box, TextField, MenuItem, Typography, Card, CardContent, Grid, Container, Avatar, Button, CardActions, CardHeader, CardMedia} from '@mui/material';
import '../../styles/categoryStyles.css'; 

const categories = [
  {
    value: 'electronics',
    label: 'electronics',
  },
  {
    value: 'jewelery',
    label: 'jewelery',
  },
  {
    value: "men's clothing",
    label: "men's clothing",
  },
  {
    value: "women's clothing",
    label: "women's clothing",
  },
];

export const CategoriesPage = () => {
  const userData = useSelector((state: AppState) => state.users.user);

  const dispatch = useDispatch();

  const { data: productsList, error, isLoading } = useFetchAllProductsQuery();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");

   if (isLoading) {
    return <Typography variant="h4">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h4">Error loading products.</Typography>;
  }

   // Filter by category
  let filteredProducts = selectedCategory
    ? productsList?.filter((product) => product.category === selectedCategory)
    : productsList;

  // Filter by product name
  if (searchQuery) {
    filteredProducts = filteredProducts?.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  
  // Sorting logic
  if (sortBy === "priceHighToLow") {
    filteredProducts = filteredProducts?.slice().sort((a, b) => b.price - a.price);
  } else if (sortBy === "priceLowToHigh") {
    filteredProducts = filteredProducts?.slice().sort((a, b) => a.price - b.price);
  }

  // Add to Fav list
  const handleAddToFavorite = (product: ProductType) => {
    if (userData?.role !== "admin" && userData?.role !== "customer") window.alert("Please register to add favorite products to wish list!");
    else {
      dispatch(addToFavorites(product));
    }
  }
  
  return (
    <>
      <div className='carousel'>
        <div className="top-section">
          <Container  className='container'>
          <TextField
            id="outlined-select-category"
            select
            label="Select Category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            helperText="Please select the product category"
          
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
                  id="outlined-search"
                  label="Search by Product Name"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  helperText="Please enter the name of product"
                  sx={{ ml: 2 }}
                />
    
            <TextField
                    id="outlined-select-sort"
                    select
                    label="Sort by Price"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    helperText="Please select the sorting option"
                    sx={{ml: 2}}
                  >
                <MenuItem value="priceHighToLow">Price High to Low</MenuItem>
                <MenuItem value="priceLowToHigh">Price Low to High</MenuItem>
            </TextField>
  </Container>
      </div>

      <div className="down-section">
        <div className="centeredContainer">
          <Box
            component="form"
            noValidate 
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            autoComplete="off"
          >
            <Grid container spacing={2}>
              {filteredProducts?.map((product: ProductType) => (
                <Grid item xs={12} sm={3} key={product.id}>
                  <Card className='card'>
                    <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {product.title[0]}
                      </Avatar>
                    }
                    title={product.title}
                  />
                  <CardMedia
                    sx={{ height: 140, backgroundSize: "contain"}}
                    image={product.image}
                    title="green iguana"
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
                    <Button id='view' size="small" component={Link} to={`/products/${product.id}`}>View Product</Button>
                    
                    
                    <Button id='favorite'
                      variant="text"
                      color="primary"
                      onClick={() => handleAddToFavorite(product)}
                    >
                      <FavoriteIcon fontSize="large" />
                    </Button>
                  </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </div>
    </div>
    </>
  )
}
