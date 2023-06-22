import { useSelector } from 'react-redux'

export default function Seleccionados({valor, indice, actualizarDepartamento, eliminarAlgunEmpleado}) {

    const listaDepartamentos = useSelector(state => state.departamentos.departamentos)

    return (
                <div className='trabajador' key={indice}>
                    <div className="imagen">
                        <img src={valor.picture.large} alt="" />
                    </div>
                    <div className="trabajador-info">
                        <h3>{valor.name.title} {valor.name.first} {valor.name.last}</h3>
                        <p>{valor.location.city}</p>
                        <p>({valor.location.country})</p>
                    </div>
                    <div className="trabajadorControles">
                        <select onChange={(event)=> actualizarDepartamento(event.target.value, indice)}>
                            <option>Asigne un lugar de trabajo</option>
                            {listaDepartamentos.map((departamento, i) =>
                                valor.departamento===departamento 
                                ? <option selected key={i}>{departamento}</option>
                                : <option key={i} value={departamento}>{departamento}</option>
                            )}
                        </select>
                        <button className="btn red" onClick={() => eliminarAlgunEmpleado(valor)}>Eliminar</button>
                    </div>
                </div>
    )
}
