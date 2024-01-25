export default function reducer(state, { type, payload }) {


    switch (type) {
        case 'SET_GOODS': 
            return{
                ...state,
                goods: payload || [],
                loading: false
            }
        case 'ADD_TO_CART': {
            const addedItem = state.order.find(findingOrder => payload.mainId === findingOrder.mainId)
            let newOrder = null
            if (!addedItem) {
                const newItem = {
                    ...payload,
                    quantity: 1
                }
                return {
                    ...state,
                    order: [...state.order, newItem]
                }
            }
            newOrder = state.order.map((orderItem) => {
                if (addedItem.mainId === orderItem.mainId) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                }
                return orderItem
                
            })
            return {
                ...state,
                order: newOrder
            }
        }
        case 'REMOVE_FROM_CART': 
            return {
                ...state,
                order: state.order.filter(el => el.mainId !== payload.id)
            }
        case 'DECREASE_QUANTITY': 
            return {
                ...state,
                order: state.order.map((orderItem) => {

                    if (payload === orderItem.mainId && orderItem.quantity > 1) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity - 1
                        }
                    }
                    return orderItem
                })
            }
        case 'INCREASE_QUANTITY': 
            return {
                ...state,
                order: state.order.map((orderItem) => {
                    if (payload === orderItem.mainId) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1
                        }
                    }
                    return orderItem
                })
            }
        default:
            return state
    }
}