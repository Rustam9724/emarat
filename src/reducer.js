export function reducer(state, {type, payload}) {
    switch (type) {
        case 'SET_IS_BURGER_OPEN': {
            return {
                ...state,
                isBurgerOpen: payload.isBurgerOpen
            }
        }
        case 'SET_SUB_BURGER_ITEM': {
            return {
                ...state,
                subBurgerItem: payload.subBurgerItem
            }
        }
        case 'SET_OPEN_COMPONENT': {
            return {
                ...state,
                openComponent: payload.opnbleComponent
            }
        }
        default: 
            return state;
    }
}