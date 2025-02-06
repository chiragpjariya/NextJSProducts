import { configureStore } from '@reduxjs/toolkit'
import products from './ProductSliece'

const store = configureStore({
    reducer: {
        products,
    }
})

export default store