import { useState } from "react";
import {  useDispatch } from 'react-redux'
import { cartActionns } from "../store";

const BodyHome = ({food}) => {
  const foodObject=food.options[0]
  const foodoptions=Object.keys(foodObject)
  const [qty,setQty]=useState(1)
  const [size,setSize]=useState(foodoptions[0])
  const finalprice= qty* parseInt(foodObject[size])

  const dispatch=useDispatch()
  const AddToCart=()=>{
    dispatch(cartActionns.addToCart({
        catogeryName: food.CategoryName,
        id: food._id,
        price: finalprice,
        name: food.name,
        option: size,
        qty:parseInt(qty)
    }))
  }


  return (
    <>
    <div className="card m-3 " style={{ width: "18rem",maxHeight:"360px"}}>
      <img src={food.img} className="card-img-top" style={{height:"150px",objectFit:"fill"}} alt={food.name} />
      <div className="card-body">
        <h5 className="card-title">{food.name}</h5>
        <p className="card-text">{food.name} </p>
        <div className='"container w-100'>
          <select className="m-2 h-100  bg-success rounded"  onChange={e=>setQty(e.target.value)}>
            {Array.from(Array(5), (e, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select className="m-2 h-100  bg-success rounded"  onChange={e=>setSize(e.target.value)}>
            {foodoptions.map(opt=><option key={opt} value={opt}>{opt}</option>)}
          </select>
          <div className="d-inline h-100 fs-5">₹{finalprice}/-</div>
        </div>
        <hr/>
        <div>
          <button className="btn btn-success" onClick={AddToCart}>Add to cart</button></div>
      </div>
    </div>
    </>
  );
};

export default BodyHome;
