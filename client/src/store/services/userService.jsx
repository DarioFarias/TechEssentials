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
            query: ({ id, ...body }) => ({
                url: `/${id}`,
                method: "PUT",
                body,
            }),
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
        }),
        logIn: builder.mutation({
            query: (body) => ({
                url: `/login`,
                method: "POST",
                body,
            }),
        }),
        me: builder.query({
            query: () => "/me",
        }),
        logOut: builder.mutation({
            query: () => ({
                url: `/logout`,
                method: "POST",
            }),
        }),
    }),
});

export const {
    useGetAllUsersQuery,
    useGetUserByIdQuery,
    useCreateUserMutation,
    useUpdateUserByIdMutation,
    useDeleteUserMutation,
    useLogInMutation,
    useMeQuery,
    useLogOutMutation
} = users;
