import {RouterProvider, createBrowserRouter} from "react-router-dom"
import './App.css';
import Home from './pages/Home';
import Login, { action  as loginActtion} from "./pages/Login";
import Register, { action as registerActtion} from "./pages/Register";
import FoodsFetch, { loader as ItemFetch } from "./pages/FoodsFetch";
import MyOrders, { loader as authtokenloader } from "./pages/MyOrders";
import CartItems from "./pages/CartItems";

const Routs=createBrowserRouter([
  {path:"/",element:<Home/>,children:[
    {index:true,element:<FoodsFetch/>,loader:ItemFetch},
    {path:"login",element:<Login/>,action:loginActtion},
    {path:"register",element:<Register/>,action:registerActtion},
    {path:"myorders",element:<MyOrders/>,loader:authtokenloader},
    {path:"cartitems",element:<CartItems/>,loader:authtokenloader},
  ]},
  
])

function App() {
  return (
    <RouterProvider router={Routs}/>
  );
}

export default App;
