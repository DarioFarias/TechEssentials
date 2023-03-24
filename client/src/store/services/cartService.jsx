import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cart = createApi({
    reducerPath: "cart",
    baseQuery: fetchBaseQuery({ baseUrl: "/tessentials/cart" }),
    tagTypes: ["cart"],
    endpoints: (builder) => ({
        getCartByUserId: builder.query({
            query: () => `/`,
            providesTags: ["cart"],
        }),
        createCart: builder.mutation({
            query: (body) => ({
                url: "",
                method: "POST",
                body,
            }),
            invalidatesTags: ["cart"],
        }),
        updateCartById: builder.mutation({
            query: (body) => ({
                query: ({ id, ...body }) => ({
                    url: `/${id}`,
                    method: "PUT",
                    body,
                }),
            }),
            invalidatesTags: ["cart"],
        }),
        deleteCartById: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["cart"],
        }),
    }),
});

export const {
    useGetCartByUserIdQuery,
    useCreateCartMutation,
    useUpdateCartByIdMutation,
    useDeleteCartByIdMutation,
    useLazyGetCartByUserIdQuery,
} = cart;
