import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

const initialState ={
  initialstate:[{loading: false,
    error: null,
    laptopData: null,
    text:[]}]


}

export const fetchlaptop = createAsyncThunk('posts/fetchlaptop', async () => {
    const response = await fetch("http://localhost:5000/api/admin/filtered-data?type=Laptop")
    return await  response.json()
  })

export const Laptopslice = createSlice({
    name: "laptopslice",
    initialState,
    reducers: {
      openlaptop:(state,action)=>{
          state.text.push(action.payload);
      }
    },
    // extrareducers allows you to handle actions from other slices or additional reducer logic that doesn't belong 
    // to a specific action creator defined within the slice.
    extraReducers: (builder) => {
        builder
        // .addCase() is a method provided by Redux Toolkit's createSlice 
        // function for defining reducer logic. It allows you to define how your slice's
        //  state should be updated in response to specific actions.
          .addCase(fetchlaptop.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchlaptop.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.laptopData = action.payload;
          })
          .addCase(fetchlaptop.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      }
});

export const laptopdata=(state)=>state.laptopslice.laptopData;
export const  laptopError=(state)=>state.laptopslice.error;
export  const  laptopLoading=(state)=>state.laptopslice.loading;
export const {openlaptop} =Laptopslice.actions
export default Laptopslice.reducer;