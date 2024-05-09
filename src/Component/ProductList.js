import {useSelector} from "react-redux";
import EditProduct from "./EditProduct";
import ProductItem from "./ProductItem";

const ProductList=()=>{
    const {productList,productObj}= useSelector(store=> store.product);
    return (
        <>
        { productObj.ProductName == undefined ?   
    <table className="table">
    <thead> 
      <tr>
      <th scope="col">ID</th>
        <th scope="col">ProductName</th>
        <th scope="col">Description</th>
        <th scope="col">Category</th>
        <th scope="col">Brand</th>
        <th scope="col">Price</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      {productList.map((item) => (
                        <ProductItem key={item.ID} Item={item}></ProductItem>
                    ))}
      
    </tbody>
  </table> :<EditProduct></EditProduct>}
  </>);
};

export default ProductList;