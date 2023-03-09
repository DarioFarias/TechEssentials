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
        getProductsByCategoryId: builder.query({
            query: (id) => `/searchbycategory/${id}`,
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
    useGetProductsByCategoryIdQuery,
    useDeleteProductByIdMutation,
    useCreateProductMutation,
    useGetProductByIdQuery,
    useUpdateProductByIdMutation,
} = products;
