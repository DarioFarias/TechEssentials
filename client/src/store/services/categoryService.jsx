import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categories = createApi({
    reducerPath: "categories",
    baseQuery: fetchBaseQuery({ baseUrl: "/tessentials/category" }),
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => "",
        }),
        getCategoryById: builder.query({
            query: (id) => `/${id}`,
        }),
        createCategory: builder.mutation({
            query: (body) => ({
                url: "",
                method: "POST",
                body,
            }),
        }),
        updateCategoryById: builder.mutation({
            query: ({ id, ...body }) => ({
                url: `/${id}`,
                method: "PUT",
                body,
            }),
        }),
        deleteCategoryById: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useCreateCategoryMutation,
    useDeleteCategoryByIdMutation,
    useGetAllCategoriesQuery,
    useGetCategoryByIdQuery,
    useUpdateCategoryByIdMutation,
} = categories;
