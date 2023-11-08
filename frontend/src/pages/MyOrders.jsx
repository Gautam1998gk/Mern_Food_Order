
import { redirect } from 'react-router-dom'

const MyOrders = () => {
  return (
    <div>
      <h1>my orders</h1>
    </div>
  )
}

export default MyOrders



export const loader=async()=>{
    const token=await localStorage.getItem("token")
    
    if(!token){
      return  redirect("/login")
    }
    return null
}