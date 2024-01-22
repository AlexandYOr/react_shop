import { Button, Box, Divider } from '@chakra-ui/react'

export default function CartItem(props) {
    const {
        mainId,
        displayName,
        price,
        quantity,
    } = props
    return (
        <Box>
            <Divider/>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <ul>
                    <li>Наименование: {displayName}</li>
                    <li>Кол-во: {quantity}</li>
                    <li>Стоимость: {price.finalPrice} USD</li>
                    <li>Итоговая стоимость: {price.finalPrice}</li>
                </ul>
                <Button colorScheme='blue'>Delete</Button>
            </Box>
        </Box>


    )
}