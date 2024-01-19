import { Card, 
    CardBody, 
    CardFooter, 
    Text, 
    Image, 
    Stack, 
    Divider, 
    ButtonGroup, 
    Button,
    Heading,
 } from '@chakra-ui/react'

export default function GoodsItem(props) {
    const {
        displayName,
        displayDescription,
        price,
        displayAssets,

    } = props

    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src={displayAssets[0].full_background}
                    alt={displayName}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{displayName}</Heading>
                    <Text>
                        Описание: {displayDescription}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        {price.finalPrice} USD
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='ghost' colorScheme='blue'>
                        Купить
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}