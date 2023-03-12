import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const products = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: "/tessentials/product" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "",
        }),
        getProductById: builder.query({
            query: (id) => `/${id}`,
        }),
        getProductsByFilters: builder.mutation({
            query: (body) => ({
                url:`/searchbyfilters`,
                method:"POST",
                body,
            }),
        }),
        createProduct: builder.mutation({
            query: (body) => ({
                url: "",
                method: "POST",
                body,
            }),
        }),
        updateProductById: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `/${id}`,
                method: "PUT",
                body,
            }),
        }),
        deleteProductById: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useGetAllProductsQuery,
    useGetProductsByFiltersMutation,
    useDeleteProductByIdMutation,
    useCreateProductMutation,
    useGetProductByIdQuery,
    useUpdateProductByIdMutation,
} = products;
