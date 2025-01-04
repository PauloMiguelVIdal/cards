import React, { useContext } from "react";
import { ArchiveCentral } from "./ArchiveCentral";

function Cards({nome,valorCompra,aluguel,casa1,casa2,casa3,casa4,hotel}){
    return(
        <div className="bg-indigo-500 w-[200px] min-h-[110px] border-[20px]">
        <h3>{nome}</h3>
        <p>valor Compra:{valorCompra}</p>
        <p>aluguel:{aluguel}</p>
        <p>1 casa:{casa1}</p>
        <p>2 casas:{casa2}</p>
        <p>3 casas:{casa3}</p>
        <p>4 casas:{casa4}</p>
        <p>hotel:{hotel}</p>
        <br/>
        </div>
    )
}
    
// chamar esse no template


    function ListCards(){   
        const {dados, atualizarDados} = useContext(ArchiveCentral)

        return(
            <div>
           {dados.propriedades.map((cards)=>(
               <Cards key={cards.id}
               nome={cards.nome}
               valorCompra={cards.valorCompra}
               aluguel={cards.aluguel}
               casa1={cards.casa1}
               casa2={cards.casa2}
               casa3={cards.casa3}
               casa4={cards.casa4}
               hotel={cards.hotel}
               />   
            ))}
        </div>
    )
    
}

export default ListCards