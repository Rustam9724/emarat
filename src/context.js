import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const SiteContext = createContext();

const inititalState = {
    isBurgerOpen: false,
    subBurgerItem: null,
}

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, inititalState); 
    
    state.setIsBurgerOpen = (isBurgerOpen) => {
        dispatch({type: 'SET_IS_BURGER_OPEN', payload: {isBurgerOpen: isBurgerOpen}})
    }

    state.setSubBurgerItem = (subBurgerItem) => {
        dispatch({type: 'SET_SUB_BURGER_ITEM', payload: {subBurgerItem: subBurgerItem}})
    }

    state.setOpenComponent = (opnbleComponent) => {
        dispatch({type: 'SET_OPEN_COMPONENT', payload: {opnbleComponent: opnbleComponent}})
    }

    state.burgerMenuSwitcher = () => {
        const burgerMenu = document.querySelector('.burger-menu');
        if (!state.isBurgerOpen) {
            burgerMenu.style.right = '0';
            burgerMenu.style.transition = '0.75s ease'
            state.setIsBurgerOpen(true);
        } else {
            burgerMenu.style.right = '-100%';
            burgerMenu.style.transition = '0.75s ease'
            state.setIsBurgerOpen(false);
        }
    }

    state.popupSwitcher = (action) => {
        const body = document.querySelector('body');
        const formPopup = document.querySelector('.form-pop-up-wrapper');
        const appSentPopup = document.querySelector('.app-suc-sent-wrapper');
        appSentPopup.style.transition = '1s ease';
        const substrates = document.querySelectorAll('.substrate');
        
        if (action === 'form-open') {
            body.style.overflow = 'hidden';
            body.style.marginRight = '16px';
            formPopup.style.top = '0';
            formPopup.style.visibility = 'visible';
            substrates[1].style.display = 'block';
        } else if (action === 'appsent-open') {
            if (formPopup.style.top === '0px') {
                formPopup.style.top = '-200vh';
                formPopup.style.visibility = 'hidden';
                setTimeout(() => {
                    appSentPopup.style.top = '0';
                    appSentPopup.style.visibility = 'visible';
                }, 980)
            } else {
                appSentPopup.style.top = '0';
                appSentPopup.style.visibility = 'visible';
            }
            substrates[0].style.display = 'block';
        } else if (action === 'close') {
            body.style.overflow = 'auto';
            body.style.marginRight = '0';
            formPopup.style.top = '-200vh';
            formPopup.style.visibility = 'hidden';
            appSentPopup.style.top = '-200vh';
            appSentPopup.style.visibility = 'hidden';
            substrates.forEach(substrate => {
                substrate.style.display = 'none';
            })
        }
    }

    state.scrollingToTop = () => {
        setTimeout(() => {
            document.querySelector('.wrapper').scrollIntoView(true);
        }, 1)
    }

    return (
        <SiteContext.Provider value={state}>
            {children}
        </SiteContext.Provider>
    )
}