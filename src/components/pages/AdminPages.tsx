// Internal Features
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../../reduxToolkit/slices/productSlice";
import { AppState } from "../../reduxToolkit/store";
import { Dispatch } from 'redux';
// Styles
import {Container,Typography,TableContainer,Table,TableHead,TableRow,TableCell,TableBody,IconButton,Toolbar,Button} from "@mui/material";
import { Delete } from "@mui/icons-material";
import "../../styles/adminStyles.css";

export const AdminPage = () => {
  const userData = useSelector((state: AppState) => state.users.user);
  const productData = useSelector((state: AppState) => state.products.products);
  const status = useSelector((state: AppState) => state.products.status);
  const error = useSelector((state: AppState) => state.products.error);
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
  // Dispatch the fetchProducts thunk
  dispatch(fetchProducts() as any); // Specify the type explicitly as any
}, [dispatch]);

const handleDelete = async (productId: number) => {
  try {
    const resultAction = await dispatch(deleteProduct(productId) as any);
    if (deleteProduct.fulfilled.match(resultAction)) {
      // Handle successful deletion, if needed
    } else if (deleteProduct.rejected.match(resultAction)) {
      // Handle deletion failure, if needed
    }
  } catch (error) {
    // Handle errors here
  }
};


  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="admin">
      <Toolbar>
        <Button className="admin-button" variant="text">
          {/* <ManageProducts /> */}
        </Button>
      </Toolbar>

      <Container>
        <Typography variant="h3" sx={{ color: "green" }}>
          Welcome {userData?.name}! This is the list of whole products!
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {productData?.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>
                    <img src={product.image} alt="Product" style={{ height: 140, backgroundSize: "contain" }} />
                  </TableCell>
                  <TableCell>
                    <IconButton color="error" onClick={() => handleDelete(product.id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};
