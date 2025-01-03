import React, { useContext } from "react";
import { ArchiveCentral } from "./ArchiveCentral";





function Cards({nome,valor}){
    return(
        <div>
        <h3>{nome}</h3>
        <p>valor:{valor}</p>
        </div>
    )
}
    
// chamar esse no template



    function ListCards(){   
        const {dados, atualizarDados} = useContext(ArchiveCentral)

        return(
            <div>
           {dados.TotalCards.map((cards)=>(
               <Cards key={cards.id}
               nome={cards.nome}
               valor={cards.valor}
               
               />   
            ))}
        </div>
    )
    
}

export default ListCards