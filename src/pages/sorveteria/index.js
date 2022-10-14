import './index.scss'
import '../../common/index.scss'
import { useState, useEffect } from 'react'

export default function Sorveteria() {
    const [gramas, setGramas] = useState(0)
    const [resultado, setResultado] = useState('')


    function calcular() {
        let total = 0;

        if(gramas >= 1000) {
            total = (gramas / 100) * 3
            setResultado(total)
        }
        else if (gramas > 0) {
            total = (gramas / 100) * 3.50
            setResultado(total)
        }
        else ( 
            setResultado(total = 'Peso errado')
        )
    }
    
    useEffect(() => {
        calcular()
    }, [gramas])

    return (
        <main className='func-sorvete'>
            <div className='conteudo'>
                <h1> Sorvetinhoo </h1>
                <div className='input'>
                    Gramas do sorvas: <input type="number" value={gramas} onChange={e => setGramas(e.target.value)} />
                </div>
                <div> {resultado ? `Total: ${resultado}` : 'peso inválido'} </div>
            </div>
        </main>
    )
}