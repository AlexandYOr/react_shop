import {useState,useEffect} from "react"
import { API_KEY, API_URL } from "../config"
import { Box } from '@chakra-ui/react'
import Preloader from "./Preloader"
import GoodsList from "./GoodsList"


export default function Shop () {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)

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
    },[])

    return <Box as='main' className="container" bg='#F6F4FB'>
        {
            loading ? <Preloader/> : <GoodsList goods={goods}/>
        }
    </Box>
}