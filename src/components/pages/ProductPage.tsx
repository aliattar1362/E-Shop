import { ProductType } from "../../misc/type"
import { baseUrl } from "../../data/data";
import useFetch from "../../hook/useFetch";
import ProductList from "../categories/products/productList/ProductList";
// Styles
import { Container } from "@mui/material";

export default function ProductPage() {
  const { data,loading, error } = useFetch<ProductType[]>(baseUrl);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return null;

  return (
    <Container>
      <ProductList products={data}/>
    </Container>
   
  )
}