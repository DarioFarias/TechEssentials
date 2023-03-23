import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categories = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({ baseUrl: '/tessentials/category' }),
  tagTypes: ['categories'],
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => '',
      providesTags: ['categories'],
    }),
    getCategoryById: builder.query({
      query: (id) => `/${id}`,
    }),
    createCategory: builder.mutation({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['categories'],
    }),
    updateCategoryById: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['categories'],
    }),
    deleteCategoryById: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
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
