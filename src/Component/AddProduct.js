import { useRef } from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { productAction } from "../Store/productSlice";

const AddProduct=()=>{
  const navigate=useNavigate();
  
    //const {addProduct}=useContext(ProductContext);
    const dispatch=useDispatch();
    const productNameElement=useRef("");
    const descriptionElement=useRef("");
    const categoryElement=useRef("");
    const brandElement=useRef("");
    const priceElement=useRef("");

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        //dispatch(productAction.addProduct());
        dispatch(productAction.addProduct(
          {body:{
            ID:Date.now(),
            ProductName:productNameElement.current.value,
            Description:descriptionElement.current.value,
            Category:categoryElement.current.value,
            Brand:brandElement.current.value,
            Price:priceElement.current.value
        }
      }));

        // dispatch({type:"ADDPRODUCT",body:
        //   {
        //     ProductName:productNameElement.current.value,
        //     Description:descriptionElement.current.value,
        //     Category:categoryElement.current.value,
        //     Brand:brandElement.current.value,
        //     Price:priceElement.current.value
        // }});
        // addProduct(
        //   {
        //     ProductName:productNameElement.current.value,
        //     Description:descriptionElement.current.value,
        //     Category:categoryElement.current.value,
        //     Brand:brandElement.current.value,
        //     Price:priceElement.current.value
        // });
        productNameElement.current.value="";
            descriptionElement.current.value="";
            categoryElement.current.value="";
            brandElement.current.value="";
            priceElement.current.value="";
            navigate("/");
    };
    return (
    <form className="row mt-3" onSubmit={handleOnSubmit}>
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
            <input type="text" className="form-control" ref={priceElement}/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-4">
          <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </div>
        
      </form>);
};

export default AddProduct;