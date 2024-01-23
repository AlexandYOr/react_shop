import { Box, Text } from '@chakra-ui/react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
} from '@chakra-ui/react'
import CartItem from './CartItem'



export default function Cart(props) {
    const { quantity, order, removeFromCart, decreaseQuantity, increaseQuantity } = props
    const { isOpen, onOpen, onClose } = useDisclosure()

    const total = order.reduce((sum, el) => {
        return sum + el.price.finalPrice * el.quantity
    }, 0)
    return (
        <>
            <Box pos='fixed' zIndex='5' padding='0 40px 40px 40px' right='10px' display='flex' alignItems='end'>
                <FontAwesomeIcon icon={faCartShopping} size='2xl' color='#1A263D' cursor='pointer' onClick={onOpen} />
                {quantity ? <Text>{quantity}</Text> : null}
            </Box>

            <Modal isOpen={isOpen} size={'lg'} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Корзина</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <ul>
                            {order.length ? order.map(item => (
                                <CartItem removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} key={item.mainId} {...item} />
                            )) : <li>Корзина пуста</li>}
                        </ul>
                    </ModalBody>
                    <ModalFooter display={'flex'} justifyContent='space-between' alignItems={'center'}>
                        <Text>Итого: {total} USD</Text>
                        <Box display={'flex'} justifyContent={'end'}>
                            <Button bgColor='#1A263D' colorScheme='green' mr={3} onClick={onClose}>
                                Оформить заказ
                            </Button>
                            <Button bgColor='#1A263D' colorScheme='red' mr={3} onClick={onClose}>
                                Закрыть
                            </Button>
                        </Box>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

}
