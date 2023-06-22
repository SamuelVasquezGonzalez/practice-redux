import {configureStore} from '@reduxjs/toolkit'
import { departamentosSlice, trabajadoresSlice } from './AllSlices'

export default configureStore({
    reducer: {
        trabajadores: trabajadoresSlice.reducer,
        departamentos: departamentosSlice.reducer
    }
})