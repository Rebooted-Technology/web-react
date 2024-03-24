import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rebootedApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getHealthCheck: builder.query<any, void>({
      query: () => "health",
    }),
  }),
});

export const { useGetHealthCheckQuery } = rebootedApi;

export default rebootedApi;
