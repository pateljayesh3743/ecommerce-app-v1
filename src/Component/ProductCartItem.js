import {useDispatch} from "react-redux";
import { productCartAction } from "../Store/productSlice";

const ProductCartItem=({Item})=>{
const dispatch=useDispatch();

const handleRemoveFromCart=(obj)=>{
  dispatch(productCartAction.removeFromCart({body:obj}));
};

    return ( <tr>
      <th scope="row">{Item.ID}</th>
        <td>{Item.ProductName}</td>
        <td>{Item.Description}</td>
        <td>{Item.Category}</td>
        <td>{Item.Brand}</td>
        <td>{Item.Price}</td>
        <td><button className="btn btn-danger" type="button" onClick={()=>{handleRemoveFromCart(Item)}}>Remove from Cart</button></td>

      </tr>);
};

export default ProductCartItem;