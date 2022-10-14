import { useState , useEffect } from "react"
import './index.scss'


export default function Salario(){
    const [salario, setSalario] = useState(0)
    const [bonus, setBonus] = useState(0)
    const [desc, setDesc] = useState(0)
    const [resposta, setResposta] = useState(0)

    async function clickCalcular () {
        let b = (salario*bonus)/ 100
        let y = b  + salario
        let x = y - desc
        setResposta(x)
    }

    return(
        <main className="main">

            <h1>salario</h1>
            <input type="number" value={salario}  onChange={e => setSalario(Number(e.target.value))}></input>
            <label>Salario</label>
            <input type="number" value={bonus}  onChange={e => setBonus(Number(e.target.value))}></input>
            <label>Bonos</label>
            <input type="number" value={desc} onChange={e => setDesc(Number(e.target.value))}></input>
            <label>Descont</label>
            <button onClick={clickCalcular}></button>
            {resposta}
        </main>
    )
}