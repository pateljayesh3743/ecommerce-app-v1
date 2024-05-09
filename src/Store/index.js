import {createStore} from "redux";

const INITIALVALUE={
    product:{productList : [],
    productObj:{}},
    productCartList:[]
}

const productReducer=(store=INITIALVALUE,action)=>{
    if(action.type==="REMOVEFROMCART")
    {
        const newproductCartList =store.productCartList.filter(i => i.ID != action.body.ID);
        store.productCartList=newproductCartList;
    }
    else if(action.type==="ADDTOCART")
    {
        if(store.productCartList.length>0)
        {
           let newproductCartList =store.productCartList.filter(i => i.ID != action.body.ID);
           newproductCartList = [...newproductCartList, action.body];
           store.productCartList=newproductCartList;
        }else{
        const newproductCartList = [...store.productCartList, action.body];
        store.productCartList=newproductCartList;
        }
    }
    else if(action.type==="ADDPRODUCT")
    {
        action.body.ID=Date.now();
        const newproductList = [...store.product.productList, action.body];
        store.product.productList=newproductList;
    }
    else if(action.type==="EDITPRODUCT")
    {
        store.product.productObj=action.body;   
    }
    else if(action.type==="UPDATEPRODUCT")
    {
        let newproductList =store.product.productList.filter(i => i.ID != action.body.ID);
        newproductList = [...newproductList, action.body];
        store.product.productList=newproductList;
        store.product.productObj={};
    }
    return store;
};

const productStore=createStore(productReducer);

export default productStore;