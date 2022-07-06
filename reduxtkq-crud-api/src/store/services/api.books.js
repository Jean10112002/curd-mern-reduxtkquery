import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const librosApi = createApi({
  reducerPath: 'librosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api-crud-libros.herokuapp.com/api/libros' }),
  endpoints: builder => ({
    getLibros: builder.query({
      query: () => '/',
      providesTags: ['libros'],
    }),
    getLibro: builder.query({
      query: id => `/${id}`,
    }),
    createLibro: builder.mutation({
      query: body => ({
        url: `/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['libros'],
    }),
    updateLibro: builder.mutation({
      query: (body, id) => ({
        url: `/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['libros'],
    }),
    deleteLibro: builder.mutation({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['libros'],
    }),
  }),
});

export const {
  useGetLibrosQuery,
  useGetLibroQuery,
  useCreateLibroMutation,
  useUpdateLibroMutation,
  useDeleteLibroMutation,
} = librosApi;
