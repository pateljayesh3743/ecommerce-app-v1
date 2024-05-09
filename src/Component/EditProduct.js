import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../Store/productSlice";

const EditProduct=()=>{
    //const {productObj,updateProduct,editProduct}=useContext(ProductContext);
    const {productObj}=useSelector((store)=>store.product);

    const dispatch=useDispatch();

    const idElement=useRef("");
    const productNameElement=useRef("");
    const descriptionElement=useRef("");
    const categoryElement=useRef("");
    const brandElement=useRef("");
    const priceElement=useRef("");

useEffect(() => {
  idElement.current.value=productObj.ID;
  productNameElement.current.value=productObj.ProductName;
  descriptionElement.current.value=productObj.Description;
  categoryElement.current.value=productObj.Category;
  brandElement.current.value=productObj.Brand;
  priceElement.current.value=productObj.Price;
},[]);
  
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        dispatch(productAction.updateProduct({
        body:{
          ID:idElement.current.value,
          ProductName:productNameElement.current.value,
          Description:descriptionElement.current.value,
          Category:categoryElement.current.value,
          Brand:brandElement.current.value,
          Price:priceElement.current.value
      }}));

        // dispatch({type:"UPDATEPRODUCT",
        //   body:{
        //     ID:idElement.current.value,
        //     ProductName:productNameElement.current.value,
        //     Description:descriptionElement.current.value,
        //     Category:categoryElement.current.value,
        //     Brand:brandElement.current.value,
        //     Price:priceElement.current.value
        // }});
        // updateProduct(
        //   {
        //     ID:idElement.current.value,
        //     ProductName:productNameElement.current.value,
        //     Description:descriptionElement.current.value,
        //     Category:categoryElement.current.value,
        //     Brand:brandElement.current.value,
        //     Price:priceElement.current.value
        // });
        idElement.current.value="";
        productNameElement.current.value="";
            descriptionElement.current.value="";
            categoryElement.current.value="";
            brandElement.current.value="";
            priceElement.current.value="";

           // editProduct({});

           dispatch(productAction.editProduct({
            body:{}
          }));
    };

    return (
    <form className="row mt-3" onSubmit={handleOnSubmit}>
      <input type="hidden"  ref={idElement}/>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Product Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" ref={productNameElement}/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" ref={descriptionElement}/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Category</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" ref={categoryElement}/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Brand</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" ref={brandElement}/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Price</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" ref={priceElement}/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-4">
          <button type="submit" className="btn btn-primary">Update</button>
          </div>
        </div>
        
      </form>);
};

export default EditProduct;