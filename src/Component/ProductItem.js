import {useDispatch} from "react-redux";
import { productAction, productCartAction } from "../Store/productSlice";

const ProductItem=({Item})=>{
    // const {editProduct,addToCart}=useContext(ProductContext);
    const dispatch=useDispatch();

    const handleEditProduct=(obj)=>{
      
      dispatch(productAction.editProduct({body:obj}));
    };
    const handleAddToCart=(obj)=>{
      dispatch(productCartAction.addToCart({body:obj}));
    };

    return ( <tr>
      <th scope="row">{Item.ID}</th>
        <td>{Item.ProductName}</td>
        <td>{Item.Description}</td>
        <td>{Item.Category}</td>
        <td>{Item.Brand}</td>
        <td>{Item.Price}</td>
        <td><button className="btn btn-warning" type="button" onClick={()=>{handleEditProduct(Item)}}>Edit</button>
        <button className="btn btn-info" type="button" onClick={()=>{handleAddToCart(Item)}}>Add To Cart</button></td>
      </tr>);
};

export default ProductItem;