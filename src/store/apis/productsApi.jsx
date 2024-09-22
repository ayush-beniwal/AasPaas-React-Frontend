import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://aaspaas-react-backend-main.onrender.com/api/products" }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: (count) => ({
        url: "/",
        params: { count },
        method: "GET",
      }),
    }),
    fetchEachProduct: builder.query({
      query: (id) => ({
        url: "/eachProduct",
        params: { id },
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchProductsQuery, useFetchEachProductQuery } = productsApi;

export { productsApi };
