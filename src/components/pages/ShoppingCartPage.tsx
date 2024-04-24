import { Link, Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../reduxToolkit/store";
import { ProductType } from "../../misc/type";
import { addItem, removeItem, deleteItem } from "../../reduxToolkit/slices/cartSlice";
// Styles
import { Button, Container, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import "../../styles/cartStyles.css"


export default function ShoppingCartPage() {
  const userData = useSelector((state: AppState) => state.users.user);

  const dispatch = useDispatch()

  const addToCart = (product: ProductType) => {
    dispatch(addItem(product))
  }

  const removeFromCart = (product: ProductType) => {
   
    dispatch(removeItem(product))
  }


  const deleteFromCart = (product: ProductType) => {
      dispatch(deleteItem(product))
  }


  const cartProducts = useSelector((state: AppState) => state.cart.cart);

  const totalAmount = cartProducts.reduce((acc, item) => acc + (item.price * ((item.rating.initialCount ?? 0) - (item.rating.count))), 0).toFixed(2);

  function handleCheckout() {
    if (cartProducts.length === 0 ) window.alert("Cart is empty!");
    else if (userData?.role !== "admin" && userData?.role !== "customer") window.alert("Please register to complete your shopping");

    else window.alert("Congratulations! Your shopping has been completed!");
  }

  return (
   
      <div>
        <Container>
              <Typography className="cartTitle"
  variant="h3">
  Cart Items
</Typography>

      <div id="cartEmpty">
        {cartProducts.length === 0 && <div >Cart is empty</div>}
      </div>

         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow >
            
            <TableCell>Product</TableCell>
            <TableCell align="right" sx={{textAlign: "left"}}>Price</TableCell>
            <TableCell align="right" sx={{textAlign: "left"}}>Quantity</TableCell>
            <TableCell align="right" sx={{textAlign: "left"}}>Subtotal</TableCell>
            <TableCell align="right" sx={{textAlign: "left"}}>Add</TableCell>
            <TableCell align="right" sx={{textAlign: "left"}}>Remove</TableCell>
            <TableCell align="right" sx={{textAlign: "left"}}>Delete</TableCell>
    
          </TableRow>
        </TableHead>
        <TableBody>
          {cartProducts.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="item" >
                <Button id='view' size="medium" component={Link} to={`/products/${item.id}`}>{item.title}</Button>
                
              </TableCell>
              <TableCell align="right" sx={{textAlign: "left"}}>€{(item.price).toFixed(2)}</TableCell>
              <TableCell align="right" sx={{textAlign: "left"}}>{(item.rating.initialCount ?? 0) - (item.rating.count) }</TableCell>
              <TableCell align="right" sx={{textAlign: "left"}}>€{(item.price * ((item.rating.initialCount ?? 0) - (item.rating.count) )).toFixed(2)}</TableCell>

              <TableCell align="right" sx={{textAlign: "left"}}>
                <Button variant="outlined" color="success" onClick={() => addToCart(item)}>+</Button>
              </TableCell>
              <TableCell align="right" sx={{textAlign: "left"}}>
                <Button variant="outlined" color="secondary" onClick={() => removeFromCart(item)}>-</Button>
              </TableCell>

              <TableCell align="right" sx={{textAlign: "left"}}>
                <IconButton color="error" onClick={() => deleteFromCart(item)}>
                  <Delete /> 
                </IconButton>
              </TableCell>
            </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    <div className="sum">
      <span id="text">Total Amount:</span>
      <span id="value">€{totalAmount}</span>
    </div>

    <Button component={RouterLink} to="/products" variant="contained" sx={{mt: "50px"}}>
      Continue Shopping?
    </Button>

    <Button onClick={handleCheckout} variant="contained" sx={{mt: "50px", ml: "20px", backgroundColor: "green"}}>
     Checkout
    </Button>
        </Container>
      </div>
  
    
  )
}
