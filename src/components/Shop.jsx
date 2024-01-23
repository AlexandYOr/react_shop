import { useState, useEffect } from "react"
import { API_KEY, API_URL } from "../config"
import { Box } from '@chakra-ui/react'
import Preloader from "./Preloader"
import GoodsList from "./GoodsList"
import Cart from "./Cart"

export default function Shop() {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])

    const addToCart = (item) => {
        const addedItem = order.find(findingOrder => item.mainId === findingOrder.mainId)
        if (!addedItem) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder((prev) => [...prev, newItem])
            return
        }
        const newOrder = order.map((orderItem) => {
            if (addedItem.mainId === orderItem.mainId) {

                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1
                }
            }
            return orderItem
        })
        setOrder(newOrder)
    }

    const removeFromCart = (itemId) => {
        const newOrder = order.filter(el => el.mainId !== itemId)
        setOrder(newOrder)
    }

    const decreaseQuantity = (item) => {
        const newQuantity = order.map((orderItem) => {

            if (item === orderItem.mainId && orderItem.quantity > 1) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity - 1
                    }
            }
            return orderItem
        })   
        setOrder(newQuantity)     
    }

    const increaseQuantity = (item) => {
        const newQuantity = order.map((orderItem) => {

            if (item === orderItem.mainId) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
            }
            return orderItem
        })   
        setOrder(newQuantity)     
    }

    

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            }
        })
            .then(res => res.json())
            .then((data) => {
                data.shop && setGoods(data.shop)
                setLoading(false);
            })
            .catch(error => console.log(error))
    }, [])

    return <Box as='main' className="container" bg='#F6F4FB'>
        <Cart quantity={order.length} order={order} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
        {loading ? <Preloader /> : <GoodsList goods={goods} addToCart={addToCart} />}
    </Box>
}
