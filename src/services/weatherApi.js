import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const weatherApiHeaders = {
  "x-rapidapi-host": process.env.REACT_APP_OPEN_WEATHER_RAPIDAPI_HOST,
  "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
};

const createRequest = (url) => ({ url, headers: weatherApiHeaders });

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_OPEN_WEATHER_API_URL,
  }),
  endpoints: (builder) => ({
    getWeatherDetails: builder.query({
      query: (cityId) => createRequest(`/weather?q=${cityId}`),
    }),
  }),
});

export const { useGetWeatherDetailsQuery } = weatherApi;
