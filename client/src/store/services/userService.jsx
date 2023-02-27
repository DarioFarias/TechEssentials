import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const users = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: "/tessentials/user" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "",
    }),
    getUserById: builder.query({
      query: (id) => `/${id}`,
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
    }),
    updateUserById: builder.mutation({
      query: ({id, ...body}) => ({
        url: `/${id}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserByIdMutation,
} = users;
