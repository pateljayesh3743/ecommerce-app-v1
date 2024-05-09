import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import {Provider} from "react-redux";
import productStore from "../Store/productSlice";

const Layout=()=>{
   // const productObjItem={};
   // const productItems=[];

   // const [productList,setProductList]=useState([]);
   // const [productObj,setProductObj]=useState({});
   // const [productCartList,setproductCartList]=useState([]);

   //const navigate=useNavigate();

//    const addProduct = (obj) => {
//       obj.ID=Date.now();
//       const newproductList = [...productList, obj];
//       setProductList(newproductList);
//       navigate("/");
//   };

//   const updateProduct = (obj) => {
//    let newproductList =productList.filter(i => i.ID != obj.ID);
//    newproductList = [...newproductList, obj];
//    setProductList(newproductList);
//    navigate("/");
// };

//   const editProduct=(obj)=>{
//    setProductObj(obj);
//   };
  
//   const addToCart = (obj) => {
//    if(productCartList.length>0)
//    {
//       let newproductCartList =productCartList.filter(i => i.ID != obj.ID);
//       newproductCartList = [...newproductCartList, obj];
//       setproductCartList(newproductCartList);
//    }else{
//    const newproductCartList = [...productCartList, obj];
//    setproductCartList(newproductCartList);
//    }
// };
// const removeFromCart = (obj) => {
//    let newproductCartList =productCartList.filter(i => i.ID != obj.ID);
//    setproductCartList(newproductCartList);
// };

   return (
      <Provider store={productStore}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </Provider>
   );
};

export default Layout;