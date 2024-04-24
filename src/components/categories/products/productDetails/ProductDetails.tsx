// Styles
import { Button, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
// Internal features
import { useParams } from "react-router-dom";
import { baseUrl } from "../../../../data/data";
import useFetch from "../../../../hook/useFetch";
import { ProductType } from "../../../../misc/type";
import { useDispatch} from "react-redux";
import { addItem } from "../../../../reduxToolkit/slices/cartSlice";
import { useState } from "react";


const ProductDetails = () => {

    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(0);

    const addToCart = (product: ProductType, quantity : number) => {
        for (let i = 0; i < quantity; i++) {
            dispatch(addItem(product))
        }
    }

    const {id} = useParams<{id: string}>();

    const { data, loading, error } = useFetch<ProductType>(`${baseUrl}/${id}`);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!data) {
        return <p>{error}</p>;
    }
    
    return ( 
         <>
          <Grid container spacing={6}>
            <Grid item xs={6}>
                <img src={data.image} alt={data.title} style={{width: "100%"}}></img>
            </Grid>

            <Grid item xs={6}>
                <Typography variant="h3">{data.title}</Typography>
                <Divider sx={{mb: 2}}/>
                 <Typography variant="h4" color="secondary">{"€"+data.price}</Typography>
                 <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>{data.title}</TableCell>
                            </TableRow>

                             <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{data.description}</TableCell>
                            </TableRow>

                             <TableRow>
                                <TableCell>Category</TableCell>
                                <TableCell>{data.category}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>Rate</TableCell>
                                <TableCell>{data.rating.rate}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>Quantity in stock</TableCell>
                                <TableCell>{data.rating.count}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Button variant="contained" sx={{height: "55px", width: "130px"}} color="secondary" onClick={() => addToCart(data, quantity)}>Add to cart</Button>
                                </TableCell>
                                <TableCell>
                                    <TextField variant="outlined" type="number" label="Quantity in Cart"  value={quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value, 10))} inputProps={{ min: 0, max: 10}}/>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                 </TableContainer>
            </Grid>
          </Grid>
        </> 
    );
}
 
export default ProductDetails;

