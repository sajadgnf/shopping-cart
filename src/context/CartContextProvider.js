import React, { createContext, useReducer } from 'react';

const initialState = {
    itemsCounter: 0,
    totalPrice: 0,
    selectedItems: [],
    checkout: false,
}

const sumItems = (item) => {
    let itemsCounter = item.reduce((sum, product) => sum + product.quantity, 0)
    let totalPrice = item.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
    return { itemsCounter, totalPrice }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkout: false
            }
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexI].quantity++
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexD].quantity--
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItems(newSelectedItems),
            }
        case "CHECKOUT":
            return {
                itemsCounter: 0,
                totalPrice: 0,
                selectedItems: [],
                checkout: true,
            }
        case "CLEAR":
            return {
                itemsCounter: 0,
                totalPrice: 0,
                selectedItems: [],
                checkout: false,
            }
        default:
            return state

    }
}

export const cartContext = createContext()

const CartContextProvider = ({ children }) => {
 
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <cartContext.Provider value={{ state, dispatch }}>
            {children}
        </cartContext.Provider>
    );
};

export default CartContextProvider;