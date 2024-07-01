import {configureStore,createSlice} from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:'product',
    initialState:{productList:[],productObj:{}},
    reducers:{
        addProduct:(state,action)=>{
            const newproductList = [...state.productList, action.payload.body];
            state.productList=newproductList;
            return state;
        },
        editProduct:(state,action)=>{
            state.productObj=action.payload.body;  
        },
        updateProduct:(state,action)=>{
            let newproductList =state.productList.filter(i => i.ID != action.payload.body.ID);
            newproductList = [...newproductList, action.payload.body];
            state.productList=newproductList;
            state.productObj={};
        }
    }
});
export const productAction=productSlice.actions;



const productCartSlice=createSlice({
    name:'productCart',
    initialState:{productCartList:[]},
    reducers:{
        addToCart:(state,action)=>{
            if(state.productCartList.length>0)
            {
                let newproductCartList =state.productCartList.filter(i => i.ID != action.payload.body.ID);
                newproductCartList = [...newproductCartList, action.payload.body];
                state.productCartList=newproductCartList;
            }else{
                const newproductCartList = [...state.productCartList, action.payload.body];
                state.productCartList=newproductCartList;
            }
        },
        removeFromCart:(state,action)=>{
            const newproductCartList =state.productCartList.filter(i => i.ID != action.payload.body.ID);
            state.productCartList=newproductCartList;
        }
    }
});

export const productCartAction=productCartSlice.actions;

const productStore=configureStore({
    reducer:{
        product:productSlice.reducer,
        productCart:productCartSlice.reducer
    }
});

export default productStore;