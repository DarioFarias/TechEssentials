import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderProducts = createApi({
    reducerPath: "orderProducts",
    baseQuery: fetchBaseQuery({ baseUrl: "/tessentials/orderProducts" }),
    tagTypes: ["orderProducts"],
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (body) => ({
                url: "",
                method: "POST",
                body,
            }),
            invalidatesTags: ["orderProducts"],
        }),
    }),
});

export const {useCreateOrderMutation} = orderProducts;
