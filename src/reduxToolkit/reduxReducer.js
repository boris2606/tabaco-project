import { createSlice } from "@reduxjs/toolkit";
import { headerNavigation,dataProducts } from "../data/Data";

let cardArray = JSON.parse(localStorage.getItem("cardProducts"))
let timerCountValue = JSON.parse(localStorage.getItem("timerCount")) || [23,59,59]

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        monayValue: '',
        headerNavigation,
        dataProducts,
        cardArray: !cardArray ? [] : cardArray,
        timerCountValue
    },
    reducers: {
        changeMoneyValue(state,action){
            state.monayValue = action.payload
        },
        addToCard(state,action){
            state.cardArray.push(action.payload)

            let includesProduct = {};
            let filtered = state.cardArray.filter(function(obj) {
                return obj.name in includesProduct ? 0 : (includesProduct[obj.name]=1);
            });

            state.cardArray = filtered
            localStorage.setItem('cardProducts',JSON.stringify(state.cardArray))
        },
        removeFromCard(state,action){
            state.cardArray = state.cardArray.filter(element => element.id !== action.payload)
            localStorage.setItem('cardProducts',JSON.stringify(state.cardArray))
        },
        addCountProduct(state,action){
            state.cardArray.map(element => {
                if(element.id === action.payload){
                    element.buyCount = element.buyCount + 1
                    element.priceCard = element.buyCount * element.price
                }
            })
        },
        removeCountProduct(state,action){
            state.cardArray.map(element => {
                if(element.id === action.payload && element.buyCount !== 1){
                    element.buyCount = element.buyCount - 1
                    element.priceCard = element.buyCount * element.price
                }
            })
        },
        timerCount(state,action){
            state.timerCountValue = action.payload
            localStorage.setItem('timerCount',JSON.stringify(state.timerCountValue ))
        },
        clearShopingCard(state,action){
            state.cardArray = []
            localStorage.setItem('cardProducts',JSON.stringify(state.cardArray))
        }
    }
})

export default toolkitSlice.reducer
export const {
    createPricesWithSales,
    changeMoneyValue,
    addToCard,
    addCountProduct,
    removeCountProduct,
    removeFromCard,
    timerCount,
    clearShopingCard
} = toolkitSlice.actions