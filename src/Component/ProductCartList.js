import {useSelector} from "react-redux";
import ProductCartItem from "./ProductCartItem";
const ProductCartList=()=>{
    //const {productCartList}=useContext(ProductContext);
    const {productCartList}=useSelector((store)=>store.productCart);
    //const productCartList=productCartStore.productCartList;

    return (
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
      {productCartList.map((item) => (
                        <ProductCartItem key={item.ID} Item={item}></ProductCartItem>
                    ))}
      
    </tbody>
  </table> );
};

export default ProductCartList;