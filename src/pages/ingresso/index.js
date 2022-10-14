import { useState , useEffect } from "react"
import './index.scss'


export default function ingresso(){
    const [inteira, setInteira] = useState(0)
    const [meia, setMeia] = useState(0)
    const [diaSemana, setDiasemana] = useState(0)
    const [nacional, setNacional] = useState(0)
    const [resposta, setResposta] = useState(0)

    async function ingressocinema () {
        let b = (salario*bonus)/ 100
        let y = b  + salario
        let x = y - desc
        setRespa|osta(x)
    }

    return(
        <main className="main">

            <h1>ingresso</h1>
            <input type="number" value={inteira}  onChange={e => setInteira(Number(e.target.value))}></input>
            <label>inteira</label>
            <input type="number" value={meia}  onChange={e => setMeia(Number(e.target.value))}></input>
            <label>media</label>
            <input type="number" value={diaSemana} onChange={e => setDiasemana(Number(e.target.value))}></input>
            <label>dia diaSemana</label>
            <label>nacional</label>
            <button onClick={clickCalcular}></button>
            {resposta}
        </main>
    )
}