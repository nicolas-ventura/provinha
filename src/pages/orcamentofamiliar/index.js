import './index.scss'
import '../../common/index.scss'
import { useState, useEffect } from 'react'

export default function Acai() {
    const [qtdpeq, setQtdpeq] = useState(0);
    const [qtdmed, setQtdmed] = useState(0);
    const [qtdgra, setQtdgra] = useState(0);
    const [desc, setDesc] = useState(0);
    const [total, setTotal] = useState(0);

    function OrcamentoFamiliar(ganhos, gastos) {
        let porcentagem = gastos / ganhos * 100;
    
        let msg = "";
        if (porcentagem < 30) {
            msg = "Parabéns, está gerenciando bem seu orçamento!";
        }
        else if (porcentagem < 50) {
            msg = "Muito bem, seus gastos não ultrapassam metade dos ganhos!";
        }
        else if (porcentagem < 80) {
            msg = "Atenção, melhor conter os gastos!";
        }
        else if (porcentagem <= 100) {
            msg = "Cuidado, seu orçamento pode ficar comprometido!";
        }
        else {
            msg = "Orçamento comprometido! Hora de rever seus gastos!";
        }
    
        return msg;
    }

    useEffect(() => {
        OrcamentoFamiliar()
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
