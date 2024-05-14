import {createSlice} from "@reduxjs/toolkit"

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
       nowPlayingMovies:null,
       trailerVedio:null,
       PopularMovies:null
    },
    reducers : {
        addNowPlayingMovies : (state,action)=>{
           state.nowPlayingMovies = action.payload; 
        },
        addTrailervedio : (state,action)=>{
            state.trailerVedio = action.payload;
        },
        addPopularMovies : (state,action)=>{
            state.PopularMovies = action.payload
        }

        
    },

});

export const {addNowPlayingMovies,addTrailervedio,addPopularMovies} = moviesSlice.actions;

export default moviesSlice.reducer;