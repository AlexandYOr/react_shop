import { useEffect, useContext } from "react"
import { API_KEY, API_URL } from "../config"
import { Box } from '@chakra-ui/react'
import Preloader from "./Preloader"
import GoodsList from "./GoodsList"
import Cart from "./Cart"
import { ShopContext } from "../context"

export default function Shop() {
    const {setGoods, loading} = useContext(ShopContext)
    
    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            }
        })
            .then(res => res.json())
            .then((data) => {
                setGoods(data.shop)
            })
            .catch(error => console.log(error))
            // eslint-disable-next-line
    }, [])

    return <Box as='main' className="container" bg='#F6F4FB'>
        <Cart />
        {loading ? <Preloader /> : <GoodsList/>}
    </Box>
}
