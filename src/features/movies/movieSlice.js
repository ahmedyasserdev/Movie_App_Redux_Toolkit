import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi";

export const fetchMoviesAysnc = createAsyncThunk('movies/fetchMovies', async (search) => {

    const response = await movieApi.get(`?apiKey=${import.meta.env.VITE_API_KEY}&s=${search}&type=movie`)
    return response.data
}
)



export const fetchShowsAysnc = createAsyncThunk('movies/fetchShows', async (search) => {

    const response = await movieApi.get(`?apiKey=${import.meta.env.VITE_API_KEY}&s=${search}&type=series`)
    return response.data
}
)



export const fetchDetailsAysnc = createAsyncThunk('movies/fetchDetails', async (id) => {

    const response = await movieApi.get(`?apiKey=${import.meta.env.VITE_API_KEY}&i=${id}&Plot=short`)
    return response.data
}
)





const initialState = {
    movies: {},
    shows: {},
    details: {},
    loading: true,
}

const movieSlice = createSlice({
    name: "movies",
    initialState,

    extraReducers: {
        [fetchMoviesAysnc.pending]: (state) => {
            state.loading = true;
        },
        [fetchMoviesAysnc.fulfilled]: (state, { payload }) => {
            state.movies = payload;
            state.loading = false;
        },
        [fetchMoviesAysnc.rejected]: (state) => {
            state.loading = false;
        },

        [fetchShowsAysnc.pending]: (state) => {
            state.loading = true;
        },
        [fetchShowsAysnc.fulfilled]: (state, { payload }) => {
            state.shows = payload;
            state.loading = false;
        },
        [fetchShowsAysnc.rejected]: (state) => {
            state.loading = false;
        },

        [fetchDetailsAysnc.pending]: (state) => {
            state.loading = true;
        },
        [fetchDetailsAysnc.fulfilled]: (state, { payload }) => {
            state.details = payload;
            state.loading = false;
        },
        [fetchDetailsAysnc.rejected]: (state) => {
            state.loading = false;
        },
    }
});



export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getAllDetails = (state) => state.movies.details
export const getLoading = (state) => state.movies.loading;

export default movieSlice.reducer
