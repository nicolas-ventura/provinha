import './index.scss'
import '../../common/index.scss'
import { useState, useEffect } from 'react'

export default function Acai() {
    const [qtdpeq, setQtdpeq] = useState(0);
    const [qtdmed, setQtdmed] = useState(0);
    const [qtdgra, setQtdgra] = useState(0);
    const [desc, setDesc] = useState(0);
    const [total, setTotal] = useState(0);

    function calcular() {
        let total = qtdpeq * 13.5 + qtdmed * 15 + qtdgra * 17;
        let desconto = total * desc/100;
        let final = total - desconto
        setTotal(final)

        if (qtdpeq < 0 || qtdmed < 0 || qtdgra < 0 || desc < 0) {
            setTotal('Valor inválido')
        }
        else if(desc === 100){
            setTotal('Free Sale')
        }
    }

    useEffect(() => {
        calcular()
    }, [qtdpeq, qtdmed, qtdgra, desc])

    return (
        <main className='func-acai'>
            <div className='conteudo'>
                <h1> Açaí do bom </h1>
                <div className='individual'>
                    Pote P: <input type="number" value={qtdpeq} onChange={e => setQtdpeq(e.target.value)} />
                </div>
                <div className='individual'>
                    Pote Médios: <input type="number" value={qtdmed} onChange={e => setQtdmed(e.target.value)} />
                </div>
                <div className='individual'>
                    Pote Grandes: <input type="number" value={qtdgra} onChange={e => setQtdgra(e.target.value)} />
                </div>
                <div className='individual'>
                    Desconto: <input type="number" value={desc} onChange={e => setDesc(Number(e.target.value))}/>
                </div>
                <div>
                    Total: {total}
                </div>
            </div>
            
        </main>
    )
}