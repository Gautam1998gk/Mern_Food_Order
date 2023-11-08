import { useDispatch, useSelector } from "react-redux"
import { cartActionns } from "../store"

const CartItems = () => {
  const cart = useSelector(state => state)
  const cartItems = cart.cartItems
  const TP = cart.totalprice
  console.log(cartItems);
  const dispatch=useDispatch()
  return (
    <div className="container m-auto mt-5 table-responsive-sm table-responsive-md">
      {cartItems.length === 0 ? <p className=" m-5 text-success text-center w-100 fs-1" > Cart Is Empty</p>
        : <table className="table table-hover table-dark ">
          <thead >
            <tr>
              <th scope="col" className="text-success ">#</th>
              <th scope="col" className="text-success ">Name</th>
              <th scope="col" className="text-success ">Quantity</th>
              <th scope="col" className="text-success ">Option</th>
              <th scope="col" className="text-success ">Amount</th>
              <th scope="col" className="text-success "></th>
            </tr>
          </thead>
          <tbody >
            {cartItems.map((item, idx) => <tr key={idx}>
              <th scope="row">{idx + 1}</th>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.option}</td>
              <td>{item.price}</td>
              <td><button className="btn p-o bg-danger" onClick={()=>dispatch(cartActionns.removefromCart([item,idx]))}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg></button></td>

            </tr>)}
          </tbody>
        </table>}
        <div>
          <h1 className="fs-2">Total Price:{TP}/-</h1>
        </div>
        <hr/>
        <div>
          <button className="btn btn-success rounded m-1" disabled={cartItems.length===0}>Order</button>
        </div>
    </div>
  )
}

export default CartItems
