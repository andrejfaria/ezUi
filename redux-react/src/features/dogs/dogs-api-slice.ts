import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const DOGS_API_KEY = 'live_VuReJqPmsrNfLa3CG0lNqsUBMxbYuXU9u8bsheTLiMU6yRG5zNPsV4Oas5ObIKPC'

interface Breed {
  id: string,
  name: string,
  image: {
    url: string
  }
}

export const apiSlice = createApi({
  // where are we keeping the data in the reducers
  reducerPath: 'api',
  // how are we going to fetch our data
  baseQuery: fetchBaseQuery({
    //url
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', DOGS_API_KEY);
      return headers;
    }
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit) {
          return `/breeds?limit=${limit}`
        }
      })
    }
  }
});

//comes from fetchBreeds, where we do a query request to fetch data 
export const { useFetchBreedsQuery } = apiSlice;