import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const currMonth = new Date().getMonth() + 1;
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: [
    "Promos",
    "News",
    "FAQ",
    "Stats",
    "Banner",
    "Batches1",
    "Batches2",
    "Batches3",
    "Trainers",
    "Testimonials",
     "Alumni"
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
      query: ({ language, context, category }) =>
        `/api/faqs/filter?language=${language}&context=${context}&category=${category}`,
      providesTags: ["FAQ"],
    }),

    // -----------------------------Stats queries-------------------------------
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

    // -----------------------------Stats queries-------------------------------
    getBanner: builder.query({
      query: ({ context, language }) =>
        `/api/banner/get-all/?language=${language}&context=${context}`,
      providesTags: ["Banner"],
    }),
    // -----------------------------batches queries-------------------------------

    getNextMonth1Batches: builder.query({
      query: () => `/api/batch/get/upcoming?month=${currMonth}`,
      providesTags: ["Batches1"],
    }),
    getNextMonth2Batches: builder.query({
      query: () => `/api/batch/get/upcoming?month=${(currMonth + 1) % 12}`,
      providesTags: ["Batches2"],
    }),
    getNextMonth3Batches: builder.query({
      query: () => `/api/batch/get/upcoming?month=${(currMonth + 2) % 12}`,
      providesTags: ["Batches3"],
    }),

    // ---------------------- trainers queries -------------------------------

    getAllTrainers: builder.query({
      query: () => `/api/trainer/get-all`,
      providesTags: ["Trainers"],
    }),
    // ---------------------- trainers queries -------------------------------

    getAllTestimonials: builder.query({
      query: ({ language, context }) =>
        `/api/testimonial/get-all?language=${language}&context=${context}`,
      providesTags: ["Testimonials"],
    }),
    // ---------------------- subscribe button query -------------------------------
    subscribeNewsletter: builder.mutation({
      query: (email) => ({
        url: `/api/newsletter`,
        method: "POST",
        body: email,
      }),
    }),
    // career screen 
    getAllOpenPosition : builder.query({
      query: ()=>
        `/api/openposition/get-all`,    
    }),
    getSpecificPosition : builder.query({
      query: (id)=>
        `/api/openposition/get/${id}`
      
    }),
     // ---------------------- Alumni query -------------------------------
     getAllAlumni: builder.query({
      query: () => `/api/alumni`,
      providesTags: ["Alumni"],
    }),
  }),
});

export const {
  useGetPromoQuery,
  useUpdatePromoMutation,
  useGetNewsQuery,
  useGetFAQsQuery,
  useGetFilteredFAQsQuery,
  useGetStatsQuery,
  useUpdateStatsMutation,
  useGetBannerQuery,
  useGetNextMonth1BatchesQuery,
  useGetNextMonth2BatchesQuery,
  useGetNextMonth3BatchesQuery,
  useGetAllTrainersQuery,
  useGetAllTestimonialsQuery,
  useSubscribeNewsletterMutation,
  useGetAllOpenPositionQuery,
  useGetSpecificPositionQuery,
  useGetAllAlumniQuery,
} = api;
