import {useContext} from 'react'
import { ShopContext } from '../context'
import {
    Card,
    CardBody,
    CardFooter,
    Text,
    Image,
    Stack,
    Divider,
    ButtonGroup,
    Button,
    Heading,
    useToast,
} from '@chakra-ui/react'

export default function GoodsItem(props) {
    const {
        item
    } = props
    const toast = useToast()
    const {addToCart} = useContext(ShopContext)

    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src={item.displayAssets[0].full_background}
                    alt={item.displayName}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{item.displayName}</Heading>
                    <Text>
                        Описание: {item.displayDescription}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        {item.price.finalPrice} USD
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button
                        onClick={() => {
                            addToCart(item)
                            toast({
                                position: 'top-right',
                                description: "Товар успешно добавлен в корзину",
                                status: "success",
                                duration: "700",
                                isClosable: "true"
                            })
                        }}
                        variant='ghost'
                        colorScheme='blue'>
                        Купить
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}