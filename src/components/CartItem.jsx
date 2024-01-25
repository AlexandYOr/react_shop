import { Button, Box, Divider } from '@chakra-ui/react'
import { useContext } from 'react'
import { ShopContext } from '../context'


export default function CartItem(props) {
    const {
        mainId,
        displayName,
        price,
        quantity,
    } = props

    const {removeFromCart, decreaseQuantity, increaseQuantity} = useContext(ShopContext)

    return (
        <Box>
            <Box bgColor='#F6F4FB' display='flex' justifyContent='space-between' alignItems='center'>
                <ul>
                    <li>Наименование: {displayName}</li>

                    <li>Кол-во:
                        <Button
                            size={'xs'}
                            bgColor='#1A263D'
                            colorScheme='purple'
                            onClick={() => decreaseQuantity(mainId)}
                        >
                            -
                        </Button>
                        {quantity}
                        <Button size={'xs'}
                            bgColor='#1A263D'
                            colorScheme='purple'
                            onClick={() => increaseQuantity(mainId)}
                        >
                            +
                        </Button>
                    </li>
                    <li>Стоимость: {price.finalPrice} USD</li>
                    <li>Итоговая стоимость: {price.finalPrice * quantity} USD</li>
                </ul>
                <Button bgColor='#1A263D' colorScheme='purple' onClick={() => removeFromCart(mainId)}>Удалить</Button>
            </Box>
            <Divider />
        </Box>


    )
}