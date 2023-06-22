import { useState, useEffect } from "react"
import Candidato from "../components/candidatos/Candidato"
import { useDispatch, useSelector } from "react-redux"
import { agregarTrabajador } from "../store/AllSlices";
import { Link } from 'react-router-dom'

export default function Seleccionar() {
    const [porSeleccionar, setPorSeleccionar] = useState([])
    const listaTrabajadores = useSelector(state => state.trabajadores.trabajadores)
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=6')
            .then(response => response.json())
            .then(data => setPorSeleccionar(data.results))
    }, [])


    const cambiarUsuario = (indice) => {
        fetch('https://randomuser.me/api/?results=1')
        .then(response => response.json())
        .then(data => {
            const provisional = [...porSeleccionar]
            provisional[indice] = {...data.results[0]}

            setPorSeleccionar(provisional)
        })
    }
    
    const guardarUsuario = (valor, indice) => {
        const departamentoNuevo = {...valor, departamento: ""}
        dispatch(agregarTrabajador(departamentoNuevo))
        cambiarUsuario(indice)
    }

    return (
        <>
            <div className="futurosUsuarios">
                {porSeleccionar.map((usuario, index) => (
                    <Candidato key={index} valores={usuario} indice={index} cambiarUsuario={cambiarUsuario} guardarUsuario={guardarUsuario}/>
                ))}
            </div>
            <hr />
            <div className="candidatos">
                {listaTrabajadores.map((valor, i) => 
                    <Link className="a" key={i} to='/seleccionados'><button className="btn-seleccionados">{valor.name.title} {valor.name.first} {valor.name.last}</button></Link>
                )}
            </div>
        </>
    )
}
