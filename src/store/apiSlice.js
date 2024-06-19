import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://3.110.121.13" }),
    tagTypes: ["Promos", "News", "FAQ", "Stats"],
    endpoints: (builder) => ({
        // -----------------------------promo queries-------------------------------

        getPromo: builder.query({
            query: () => "/api/promo/get-all",
            providesTags: ["Promos"]
        }),
        // -----------------------------news queries-------------------------------

        getNews: builder.query({
            query: () => "/api/news/get-all",
            providesTags: ["News"]
        }),

        // -----------------------------FAQs queries-------------------------------

        getFAQs: builder.query({
            query: () => `/api/faqs/get-all`,
            providesTags: ["FAQ"]
        }),
        getFilteredFAQs: builder.query({
            query: ({ data }) => `/api/faqs/filter?${data.filter}=${data.type}`,
            providesTags: ["FAQ"]
        }),

        // -----------------------------Stats-------------------------------
        getStats: builder.query({
            query: () => "/api/stats/get-all",
            providesTags: ["Stats"],
        }),
    })
})

export const { useGetPromoQuery, useGetNewsQuery, useGetFAQsQuery, useGetFilteredFAQsQuery, useGetStatsQuery} = api;