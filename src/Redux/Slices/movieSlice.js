import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// Define an async thunk action to fetch movies
export const fetchMovies = createAsyncThunk('movies/fetch', async (searchInput) => {
        const response = await axios.get(`https://www.omdbapi.com/?t=${searchInput}&plot=full&apikey=4285dd71`);
        return response.data; // Return the data from the API response
});

export const fetchUpcomingPopular = createAsyncThunk('upcoming/popular' , async(search)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${search}?api_key=6d3364e68670712e53a9932c2c9e34bd`)
    return res.data
})

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movie: [],
        loading: false,
        error: null,
        upcomingAndPopular: [], // This is the property name
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movie = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // ForUpComingandPopular
            .addCase(fetchUpcomingPopular.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUpcomingPopular.fulfilled, (state, action) => {
                state.loading = false;
                state.upcomingAndPopular = action.payload;
            })
            .addCase(fetchUpcomingPopular.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
            
    }
});

export const { addInc } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
