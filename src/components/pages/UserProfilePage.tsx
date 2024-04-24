
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../reduxToolkit/store";
import { Link } from "react-router-dom";
import { removeFromFavorites } from "../../reduxToolkit/slices/favoritesSlice";
import { ProductType } from "../../misc/type";
// Styles
import { Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const UserProfilePage = () => {
  const favoriteList = useSelector((state: AppState) => state.favorites.favorites);
  const userData = useSelector((state: AppState) => state.users.user);
  const dispatch = useDispatch();

  const handleDelete = (product: ProductType) => {
    dispatch(removeFromFavorites(product))
  }

  return (
    <Container>
      <Typography variant="h3" sx={{color: "green"}}>Welcome {userData?.name}! This is the list of your favorite products!</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {favoriteList.map((fav) => (
              <TableRow key={fav.id}>
                <TableCell>
                  <Button id='view' size="medium" component={Link} to={`/products/${fav.id}`}>{fav.title}</Button>
                </TableCell>
                <TableCell>€{fav.price}</TableCell>
                <TableCell><Button sx={{backgroundColor: 'red', color: 'white' }} variant="contained" onClick={() => handleDelete(fav)}>Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default UserProfilePage;
