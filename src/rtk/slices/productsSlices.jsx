import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts=createAsyncThunk('productSlice/fetchProducts',async()=>{
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
})

export const productSlice = createSlice({
    initialState:[{id:1,title:'pro1'}],
    name:'productSlice',
    reducers:{
    addproduct:(state,action)=>{
      state.push(action.payload)
    }
    },
    extraReducers:(builder)=>{
      builder.addCase(fetchProducts.fulfilled,(state,action)=>{
        state=action.payload
      })
    }
  }
)
export const {addproduct} = productSlice.actions;
export default productSlice.reducer;