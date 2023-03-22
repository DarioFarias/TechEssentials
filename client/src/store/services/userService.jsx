import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const users = createApi({
    reducerPath: "users",
    baseQuery: fetchBaseQuery({ baseUrl: "/tessentials/user" }),
    tagTypes: ["me"],
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => "",
            providesTags:["me"],
        }),
        getUserById: builder.query({
            query: (id) => `/${id}`,
            providesTags:["me"],
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
            invalidatesTags:["me"],
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
            invalidatesTags:["me"],
        }),
        me: builder.query({
            query: () => "/me",
            providesTags:["me"],
        }),
        logOut: builder.mutation({
            query: () => ({
                url: `/logout`,
                method: "POST",
            }),
            invalidatesTags:["me"],
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
    useLogOutMutation,
    useLazyMeQuery,
    useLazyGetUserByIdQuery
} = users;
