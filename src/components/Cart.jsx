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
    const { quantity, order } = props
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
        <>
            <Box pos='fixed' zIndex='5' padding='0 40px 40px 40px' right='10px' display='flex' alignItems='end'>
                <FontAwesomeIcon icon={faCartShopping} size='2xl' color='#1A263D' cursor='pointer' onClick={onOpen} />
                {quantity ? <Text>{quantity}</Text> : null}
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Корзина</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <ul>
                            {order.length ? order.map(item => (
                                <CartItem key={item.mainId} {...item} />
                            )) : <li>Корзина пуста</li>}
                        </ul>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Text></Text>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

}
