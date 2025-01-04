import React, { useContext } from "react";
import { ArchiveCentral } from "./ArchiveCentral";


function Modifications() {

    const {dados, atualizarDados} = useContext(ArchiveCentral)

    const teste = ()=>{
        console.log(dados.TotalCards[0].valor)
        atualizarDados(dados.TotalCards[0],{...dados.TotalCards[0],valor:{...dados.TotalCards[0].valor+200}})
        console.log(dados.TotalCards[0].valor)
    }


    return (
        <div>
            <button onClick={teste}>teste</button>

            <h1>
                {dados.id}
                {dados.nome}
                </h1>
        </div>
    )
}

export default Modifications