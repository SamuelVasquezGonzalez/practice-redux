import { useSelector, useDispatch } from 'react-redux'
import Seleccionados from '../components/gestion/Seleccionados'
import { modificarDepartamento, eliminarEmpleado } from '../store/AllSlices'

export default function Gestion() {
    
    const dispatch = useDispatch()
    const listaTrabajadores = useSelector(state => state.trabajadores.trabajadores)


    const actualizarDepartamento = (continente, index) => {
        dispatch(modificarDepartamento(
            {
                indice: index,
                nuevoContinente: continente
            }
        ))
        console.log(listaTrabajadores)
    }

    const eliminarAlgunEmpleado = (valor) => {
        dispatch(eliminarEmpleado(
            {
                correo: valor.email,
                telefono: valor.cell
            }
        ))
    }

    return (
        <div className='seleccionados'>
            {listaTrabajadores.map((valor, index) => 
                <Seleccionados valor={valor} indice={index} actualizarDepartamento={actualizarDepartamento} eliminarAlgunEmpleado={eliminarAlgunEmpleado}/>
            )}
        </div>
    )
}
