import {configureStore} from '@reduxjs/toolkit';
import Laptopslice from '../features/Laptopslice';

export const store = configureStore({
    reducer: {
        laptopslice:Laptopslice
    }
})