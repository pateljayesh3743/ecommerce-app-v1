import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Header=()=>{
  const {productCartList}= useSelector(store=> store.productCart);

    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" >Navbar</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item nav-link">
            <NavLink to="/">Product List</NavLink>
          </li>
          <li className="nav-item nav-link">
            <NavLink to="add-product">Add Product</NavLink>
          </li>
          <li className="nav-item nav-link">
            <NavLink to="add-to-cart">Your Cart ({productCartList.length})</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Header;