import {createSlice} from '@reduxjs/toolkit'

export const trabajadoresSlice = createSlice({
    name: 'trabajadores',
    initialState: {
        trabajadores:[]
    },
    reducers: {
        agregarTrabajador: (state, action) => {
            state.trabajadores = [...state.trabajadores, action.payload]
        },

        modificarDepartamento: (state, action) => {
            const {indice, nuevoContinente} = action.payload;
            state.trabajadores[indice].departamento = nuevoContinente;
        },

        eliminarEmpleado: (state, action) => {
            const {correo, telefono} = action.payload;
            state.trabajadores = state.trabajadores.filter(valor=>
                    valor.email !== correo &&
                    valor.cell !== telefono
                )
        }
    }
})

export const departamentosSlice = createSlice({
    name: 'departamentos',
    initialState: {
        departamentos:["America Norte (Front-end)", "America Sur (Backend)", "Europa (Distribucion)", "Europa (Marketing)", "Asia (Supervicion)", "America Central (Despliegue)"]
    },
    reducers: {

    }
})


export const { agregarTrabajador } = trabajadoresSlice.actions;
export const { modificarDepartamento } = trabajadoresSlice.actions;
export const { eliminarEmpleado } = trabajadoresSlice.actions;