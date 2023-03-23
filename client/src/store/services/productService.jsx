import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const products = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: '/tessentials/product' }),
  tagTypes: ['products'],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => '',
      providesTags: ['products'],
    }),
    getProductById: builder.query({
      query: (id) => `/${id}`,
    }),
    getProductsByFilters: builder.query({
        query: ({id,minPrice,maxPrice}) => `/searchbyfilters/${id}/${minPrice}/${maxPrice}`,
        providesTags: ['products'],
      }),
    getProductsByCategoryIdForAdmins : builder.query({
        query: (id) => `/searchbyCategory/${id}`,
        providesTags: ['products'],
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['products'],
    }),
    updateProductById: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['products'],
    }),
    deleteProductById: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useLazyGetProductsByCategoryIdForAdminsQuery,
  useLazyGetProductsByFiltersQuery,
  useDeleteProductByIdMutation,
  useCreateProductMutation,
  useGetProductByIdQuery,
  useUpdateProductByIdMutation,
} = products;
