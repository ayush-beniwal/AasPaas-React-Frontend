import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://aaspaas-react-backend-main.onrender.com/api/users" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (token) => ({
        url: "/login",
        method: "POST",
        body: { googleAccessToken: token },
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: { data },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = userApi;
export { userApi };
