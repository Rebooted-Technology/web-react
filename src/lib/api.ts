import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ 
        baseUrl: process.env.REACT_APP_API_URL,
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
          },
    }),
    endpoints: () => ({})
})

export default api