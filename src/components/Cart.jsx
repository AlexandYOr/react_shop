import { Box, Text } from '@chakra-ui/react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




export default function Cart(props) {
    const { quantity } = props

    return <Box pos='fixed' cursor='pointer' zIndex='5' padding='0 40px 40px 40px' right='10px'>
        <FontAwesomeIcon icon={faCartShopping} size='2xl' color='#1A263D'/>
        {quantity ? <Text>{quantity}</Text> : null}
    </Box>

}
