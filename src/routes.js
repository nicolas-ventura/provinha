import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Acai from './pages/acai/index.js'
import Signo from './pages/signos/index.js'
import Sorveteria from './pages/sorveteria/index.js'
import Salario from './pages/salario/index.js'
import Abastecimento from './pages/paradas/index.js'
import Temperatura from './pages/febre/index.js'
import Ingresso from  './pages/ingresso'
import OrcamentoFamiliar from './pages/orcamentofamiliar'

export default function Index(){
    return(
        <BrowserRouter> 
            <Routes>
                <Route path='/acai' element={<Acai/>}/>
                <Route path='/signo' element={<Signo/>}/>
                <Route path='/sorveteria' element={<Sorveteria/>}/>
                <Route path='/salario' element={<Salario />} />
                <Route path='/abastecimento' element={<Abastecimento />} />
                <Route path='/temperatura' element={<Temperatura />} />
                <Route path='/ingresso' element={<Ingresso />} />
                <Route path='/orcamentofamiliar' element={<OrcamentoFamiliar />} />
            </Routes>
        </BrowserRouter>
    ) 
}