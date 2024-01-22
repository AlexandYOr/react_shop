import { Button, Box, Divider } from '@chakra-ui/react'

export default function CartItem(props) {
    const {
        // mainId,
        displayName,
        price,
        quantity,
    } = props
    return (
        <Box>
            <Box bgColor='#F6F4FB' display='flex' justifyContent='space-between' alignItems='center'>
                <ul>
                    <li>Наименование: {displayName}</li>
                    <li>Кол-во: {quantity}</li>
                    <li>Стоимость: {price.finalPrice} USD</li>
                    <li>Итоговая стоимость: {price.finalPrice * quantity} USD</li>
                </ul>
                <Button bgColor='#1A263D' colorScheme='purple'>Delete</Button>
            </Box>
            <Divider/>
        </Box>


    )
}