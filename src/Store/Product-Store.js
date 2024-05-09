import { createContext } from "react";

export const ProductContext = createContext(
    { productList:[],addProduct: () => { },editProduct:()=>{},productObj:{},
    updateProduct:()=>{},productCartList:[],addToCart:()=>{},removeFromCart:()=>{}
 });