import './index.scss'
import '../../common/index.scss'
import { useState, useEffect } from 'react'

export default function Signo() {
    const [mes, setMes] = useState('')
    const [dia, setDia] = useState()
    const [resultado, setResultado] = useState('')

    function calcular () {
        if (mes == 'setembro' && dia >= 23 || mes == 'outubro' && dia <= 22) {
            setResultado('Seu signo é libra')
        }
        else {
            setResultado('Seu signo não é libra')
        }
    }
    useEffect(() => {
        calcular()
    }, [mes, dia])

    return (
        <main className='func-signo'>
            <div className='conteudo'>
                <h1> Signoo </h1>
                <div>
                month: <input type="text" value={mes} onChange={e => setMes(e.target.value)} />
                </div>
                <div>
                    Day: <input type="number" value={dia} onChange={e => setDia(e.target.value)} />
                </div>
                {resultado}            
            </div>
        </main>
    )
}