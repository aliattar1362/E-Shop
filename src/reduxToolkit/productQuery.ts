import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApiUrl } from "../data/data";
import { ProductType } from "../misc/type";
import { useDispatch } from "react-redux";

export const productQueries = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseApiUrl }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    fetchAllProducts: builder.query<ProductType[], void>({
      query: () => "",
      providesTags: ["Products"],
    }),
  }),
});

export const { useFetchAllProductsQuery } = productQueries;
