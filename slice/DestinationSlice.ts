import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'




// export const fetchDestination = createAsyncThunk('destinations/getAllDestinations', async() => {
//     try {
//         const response = await axios.get('https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=304554',{
//             headers : {
//                 'X-RapidAPI-Key' : '33881b7c7emsh768f269d5512ddfp184893jsn8f6983f794ad',
//                 'X-RapidAPI-Host' : 'tripadvisor16.p.rapidapi.com',
//             }
//         });
//         console.log(response.data.data)
//         return response.data.data
//     } catch (error) {
//         console.log(error)
//     }
// }) 


const initialState = {
    destinations : []
} as any

export const DestinationSlice = createSlice({
    name : 'destinations',
    initialState,
    reducers : {},
    // extraReducers : (builder) => {
    //     builder.addCase(fetchDestination.fulfilled, (state, action) => {
    //         state.destinations = action.payload
    //     })
    // }

})

export default DestinationSlice.reducer;

