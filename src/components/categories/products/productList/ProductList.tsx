// Internal features
import { ProductType } from "../../../../misc/type";
import ProductCard from "../productCard/ProductCard";
import { PaginationComp } from "../../../pagination/PaginationComp";
import { paginate, PaginationResult } from "../../../../misc/paginate"; // Import PaginationResult
// Style
import { Grid } from "@mui/material";
import { useState } from "react";
import "../../../../styles/paginationStyles.css"

interface Props {
  products: ProductType[];
}

export default function ProductList({ products }: Props) {
  const [pageSize, setPageSize] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const items: PaginationResult = paginate(products, currentPage, pageSize); 

  return (
    <>
      <Grid container spacing={2}>
        {items.items.map((product) => ( 
          <Grid key={product.id} item xs={12} sm={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
        <Grid item xs={12}>
        </Grid>
      </Grid>

      <PaginationComp
        productCount={products.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}
