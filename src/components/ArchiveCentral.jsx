import React, { Children, createContext, useContext, useState } from "react";
const ArchiveCentral = createContext()


const ArchiveCentralProvider = ({ children }) => {

    const [dados, setDados] = useState({
        TotalCards:[
            {id:0, nome:"Morumbi", valor:5000},
            {id:1, nome:"Pacaembu", valor:2000},
            {id:2, nome:"Interlagos", valor:3000},
        ]
    })

    const atualizarDados = (chave, novoValor) => {
        setDados(prevState => ({
            ...prevState,
            [chave]: novoValor
        }))
    }



        return (
            <ArchiveCentral.Provider value={{ dados, atualizarDados }}>
                {children}
            </ArchiveCentral.Provider>
        )
    
}

export { ArchiveCentral, ArchiveCentralProvider };