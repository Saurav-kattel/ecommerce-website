import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

const initialState ={
loading: false,
        error: null,
        laptopData: null
}

export const fetchlaptop = createAsyncThunk('posts/fetchlaptop', async () => {
    const response = await fetch("http://localhost:5000/api/admin/filtered-data?type=Laptop")
    return await  response.json()
  })

export const Laptopslice = createSlice({
    name: "laptopslice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
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
export default Laptopslice.reducer;