import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Seleccionar from '../pages/Seleccionar'
import Header from '../components/header/Header'
import Gestion from '../pages/Gestion'

export default function Router() {
    return (
        <BrowserRouter >

            <Header />
            <Routes>
                <Route path='/' element={<Seleccionar />}/>
                <Route path='/seleccionados' element={<Gestion />}/>
            </Routes>
        </BrowserRouter>
    )
}

