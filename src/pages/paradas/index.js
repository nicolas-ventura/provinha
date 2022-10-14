import './index.scss'
import '../../common/index.scss'
import { useState, useEffect } from 'react'

export default function Abastecimento() {
    const [capacidade, setCapacidade] = useState (0);
    const [consumo, setConsumo] = useState (0);
    const [distancia, setDistancia] = useState (0);
    const [paradas, setParadas] = useState(0);

    function calcular() {
        let cons = distancia / consumo;
        let paradas = cons / capacidade;
        paradas = Math.ceil(paradas)
    }

    return (
        <main className='func-abas'>
            <div className='conteudo'>
                <div className='individual'>
                    Informe a capacidade: <input type='text' value={capacidade} onChange={e => setCapacidade(e.target.value)} />
                </div>
                <div className='individual'>
                    Informe o consumo: <input type='text' value={consumo} onChange={e => setConsumo(e.target.value)} />
                </div>
                <div className='individual'>
                    Informe a distância: <input type='text' value={distancia} onChange={e => setDistancia(e.target.value)} />
                </div>
                <div className='individual'>
                    Resultado: {paradas}
                </div>
            </div>
        </main>
    )
}