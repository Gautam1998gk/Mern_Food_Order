
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate()
  const cartItems=useSelector(state=>state.cartItems)
  
  const cartqty=cartItems.reduce((ini,item)=> ini=ini+item.qty,0)

  const logOutHandler= ()=>{
    localStorage.clear("token")
    navigate("/")
  }
  
  return (
    <div>
      <nav className="navbar bg-info navbar-expand-lg " data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand fs-5 fst-italic" to="/">
            GoToFood
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link " to="/myorders">
                  My Orders
                 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cartitems">
                  Cart Items
                  <span className="bg-danger mx-1 p-1 rounded-circle">{cartqty}</span>
                </NavLink>
              </li>
            </ul>
          </div>
          {!localStorage.getItem("token")?<div className="d-flex">
            <NavLink className="btn bg-white text-success mx-1" to="/register">
              Register
            </NavLink>
            <NavLink className="btn bg-white text-success mx-1" to="/login">
                  Login
            </NavLink>
          </div>: <button className="btn bg-white text-success mx-2"onClick={logOutHandler}>
                  Logout
            </button>}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
