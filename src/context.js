import {createContext, useReducer} from 'react'
import reducer from './reducer'

export const ShopContext = createContext()

const initialState = {
    goods: [],
    loading: true,
    order: [],
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState)

    value.addToCart = (item) => {
        dispatch({type: 'ADD_TO_CART', payload: item})
    }

    value.removeFromCart = (itemId) => {
        dispatch({type: 'REMOVE_FROM_CART', payload: {id: itemId}})
    } 

    value.decreaseQuantity = (item) => {
        dispatch({type: 'DECREASE_QUANTITY', payload: item})
    }

    value.increaseQuantity = (item) => {
        dispatch({type: 'INCREASE_QUANTITY', payload: item})
    }
    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }
    
    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}