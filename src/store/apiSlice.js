import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const currMonth = new Date().getMonth() + 1;
console.log(currMonth);

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://backend.thelanguagenetwork.co/",
  }),
  // baseQuery: fetchBaseQuery({baseUrl:"http://3.110.121.13"}),
  tagTypes: [
    "Promos",
    "News",
    "FAQ",
    "Stats",
    "Banner",
    "Batches1",
    "Batches2",
    "Batches3",
  ],
  endpoints: (builder) => ({
    // -----------------------------promo queries-------------------------------

    getPromo: builder.query({
      query: () => "/api/promo/get-all",
      providesTags: ["Promos"],
    }),
    updatePromo: builder.mutation({
      query: ({ id, ...updatedPromo }) => ({
        url: `/api/promo/update/${id}`,
        method: "PATCH",
        body: updatedPromo,
      }),
      invalidatesTags: ["Promos"],
    }),
    // -----------------------------news queries-------------------------------

    getNews: builder.query({
      query: () => "/api/news/get-all",
      providesTags: ["News"],
    }),

    // -----------------------------FAQs queries-------------------------------

    getFAQs: builder.query({
      query: () => `/api/faqs/get-all`,
      providesTags: ["FAQ"],
    }),
    getFilteredFAQs: builder.query({
      query: ({ data }) => `/api/faqs/filter?${data.filter}=${data.type}`,
      providesTags: ["FAQ"],
    }),
    addFAQs: builder.mutation({
      query: (FAQ) => ({
        url: `/api/faqs/create`,
        method: "POST",
        body: FAQ,
      }),
      invalidatesTags: ["FAQ"],
    }),
    updateFAQs: builder.mutation({
      query: ({ id, ...updatedPromo }) => ({
        url: `/api/faqs/update/${id}`,
        method: "PATCH",
        body: updatedPromo,
      }),
      invalidatesTags: ["FAQ"],
    }),

    //
    getStats: builder.query({
      query: () => "/api/stats/get-all",
      providesTags: ["Stats"],
    }),

    updateStats: builder.mutation({
      query: ({ id, ...updatedStatsData }) => ({
        url: `/api/stats/update/${id}`,
        method: "PATCH",
        body: updatedStatsData,
      }),
      invalidatesTags: ["Stats"],
    }),

    //
    getBanner: builder.query({
      query: () => "/api/banner/get-all",
      providesTags: ["Banner"],
    }),
    updateBanner: builder.mutation({
      query: ({ pageName, ...updatedBannerData }) => ({
        url: `/api/banner/update/${pageName}`,
        method: "PATCH",
        body: updatedBannerData,
      }),
      invalidatesTags: ["Banner"],
    }),

    // -----------------------------batches queries-------------------------------

    getNextMonth1Batches: builder.query({
      query: () => `/api/batch/get/upcoming?month=${currMonth + 1}`,
      providesTags: ["Batches1"],
    }),
    getNextMonth2Batches: builder.query({
      query: () => `/api/batch/get/upcoming?month=${(currMonth + 2) % 12}`,
      providesTags: ["Batches2"],
    }),
    getNextMonth3Batches: builder.query({
      query: () => `/api/batch/get/upcoming?month=${(currMonth + 3) % 12}`,
      providesTags: ["Batches3"],
    }),
  }),
});

export const {
  useGetPromoQuery,
  useUpdatePromoMutation,
  useGetNewsQuery,
  useGetFAQsQuery,
  useGetFilteredFAQsQuery,
  useAddFAQsMutation,
  useUpdateFAQsMutation,
  useGetStatsQuery,
  useUpdateStatsMutation,
  useGetBannerQuery,
  useUpdateBannerMutation,
  useGetNextMonth1BatchesQuery,
  useGetNextMonth2BatchesQuery,
  useGetNextMonth3BatchesQuery,
} = api;
