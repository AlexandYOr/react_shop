import { Stack } from '@chakra-ui/react';
import GoodsItem from "./GoodsItem";

export default function GoodsList (props) {
    const {goods = [], addToCart} = props;
    if (!goods.length) {
        return <h3>Пусто</h3>
    }

    return (
        <Stack wrap='wrap' justifyContent='center' direction='row' spacing='24px'>
            {goods.map(item => (
                <GoodsItem key={item.mainId} item={item} addToCart={addToCart}/>
            ))}
</Stack>
    )
}

