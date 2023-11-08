import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialState = { totalprice: 0, cartItems: [] }

const counterStore = createSlice({
    name: "cartStore",
    initialState,
    reducers: {
        addToCart(state, action) {
            const data = action.payload
            state.totalprice += data.price
            const existingItem = state.cartItems.filter(item => item.id === data.id).filter(item=>item.option === data.option)
           
            if (existingItem.length>0) {
                existingItem[0].qty += data.qty
                existingItem[0].price += data.price
            } else {
                state.cartItems.push({
                    catogeryName: data.catogeryName,
                    id: data.id,
                    price: data.price,
                    name: data.name,
                    option: data.option,
                    qty:data.qty
                })
            }
        },
        removefromCart(state,action){
            const data=action.payload
            console.log(data);
            state.totalprice -= data[0].price
            state.cartItems=state.cartItems.filter((item,idx) => idx!== data[1])
        }
    }
})


export  const store=configureStore({reducer:counterStore.reducer})

export const cartActionns=counterStore.actions