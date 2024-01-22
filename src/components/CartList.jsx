// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     Button,
//     Text,
//     useDisclosure 
// } from '@chakra-ui/react'
// import CartItem from './CartItem'

// export default function CartList(props) {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const {order = []} = props

//     return (
//         <>
//             <Button onClick={onOpen}>Open Modal</Button>

//             <Modal isOpen={isOpen} onClose={onClose}>
//                 <ModalOverlay />
//                 <ModalContent>
//                     <ModalHeader>Корзина</ModalHeader>
//                     <ModalCloseButton />
//                     <ModalBody>
//                         <ul>
//                             {order.length ? order.map(item => (
//                                 <CartItem key={item.mainId} {...item}/>
//                             )) : <li>Корзина пуста</li>}
//                         </ul>
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button colorScheme='blue' mr={3} onClick={onClose}>
//                             Close
//                         </Button>
//                         <Text></Text>
//                     </ModalFooter>
//                 </ModalContent>
//             </Modal>
//         </>
//     )
// }
