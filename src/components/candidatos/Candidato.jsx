import React from 'react'

export default function Candidato({valores, indice, cambiarUsuario, guardarUsuario}) {
    return (
        <>
            <div className="usuario-card" key={indice}>
                <div className="imagen">
                    <img src={valores.picture.large} alt="" />
                </div>
                <div className="informacion">
                    <h3 className="nombre">{valores.name.title} {valores.name.first} {valores.name.last}</h3>
                    <p>Ubicacion: {valores.location.city} ({valores.location.country})</p>
                    <a className="links" href={`mailto:${valores.email}`}>{valores.email} </a>
                    <a className="links" href={`tel:${valores.phone}`}>{valores.phone} </a>
                </div>
                <div className="controles">
                    <button className='btn red' onClick={()=> cambiarUsuario(indice)}>Ocultar</button>
                    <button className='btn green' onClick={()=> guardarUsuario(valores, indice)}>Guardar</button>
                    <p>{valores.seed}</p>
                </div>
            </div>
        </>
    )
}
