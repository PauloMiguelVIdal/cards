import React, { Children, createContext, useContext, useState } from "react";
const ArchiveCentral = createContext()


const ArchiveCentralProvider = ({ children }) => {

    const [dados, setDados] = useState({
        propriedades:[
            {id: 0, nome: "Leblon", cor: "marrom", valorCompra: 100, aluguel: 6, casa1: 30, casa2: 90, casa3: 270, casa4: 400, hotel: 550, proprietario: " não"},
            {id: 1, nome: "Avenida Presidente Vargas", cor: "marrom", valorCompra: 100, aluguel: 6, casa1: 30, casa2: 90, casa3: 270, casa4: 400, hotel: 550, proprietario: " não"},
            {id: 2, nome: "Avenida Nossa Senhora de Copacabana", cor: "azulClaro", valorCompra: 200, aluguel: 10, casa1: 50, casa2: 150, casa3: 450, casa4: 625, hotel: 750, proprietario: " não"},
            {id: 3, nome: "Avenida Brigadeiro Faria Lima", cor: "azulClaro", valorCompra: 200, aluguel: 10, casa1: 50, casa2: 150, casa3: 450, casa4: 625, hotel: 750, proprietario: " não"},
            {id: 4, nome: "Avenida Rebouças", cor: "azulClaro", valorCompra: 240, aluguel: 20, casa1: 100, casa2: 300, casa3: 900, casa4: 1250, hotel: 1500, proprietario: " não"},
            {id: 5, nome: "Avenida 9 de Julho", cor: "roxo", valorCompra: 300, aluguel: 26, casa1: 130, casa2: 390, casa3: 900, casa4: 1100, hotel: 1275, proprietario: " não"},
            {id: 6, nome: "Rua Boa Vista", cor: "roxo", valorCompra: 300, aluguel: 26, casa1: 130, casa2: 390, casa3: 900, casa4: 1100, hotel: 1275, proprietario: " não"},
            {id: 7, nome: "Avenida Paulista", cor: "roxo", valorCompra: 400, aluguel: 50, casa1: 200, casa2: 600, casa3: 1400, casa4: 1700, hotel: 2000, proprietario: " não"},
            {id: 8, nome: "Jardim Europa", cor: "laranja", valorCompra: 500, aluguel: 60, casa1: 250, casa2: 750, casa3: 1500, casa4: 2000, hotel: 2500, proprietario: " não"},
            {id: 9, nome: "Avenida Pacaembu", cor: "laranja", valorCompra: 500, aluguel: 60, casa1: 250, casa2: 750, casa3: 1500, casa4: 2000, hotel: 2500, proprietario: " não"},
            {id: 10, nome: "Morumbi", cor: "laranja", valorCompra: 600, aluguel: 75, casa1: 350, casa2: 1000, casa3: 1800, casa4: 2300, hotel: 2800, proprietario: " não"},
            {id: 11, nome: "Interlagos", cor: "vermelho", valorCompra: 700, aluguel: 90, casa1: 400, casa2: 1100, casa3: 2000, casa4: 2400, hotel: 3000, proprietario: " não"},
            {id: 12, nome: "Itaim Bibi", cor: "vermelho", valorCompra: 700, aluguel: 90, casa1: 400, casa2: 1100, casa3: 2000, casa4: 2400, hotel: 3000, proprietario: " não"},
            {id: 13, nome: "Jardins", cor: "vermelho", valorCompra: 800, aluguel: 100, casa1: 450, casa2: 1200, casa3: 2100, casa4: 2500, hotel: 3200, proprietario: " não"},
            {id: 14, nome: "Copacabana", cor: "amarelo", valorCompra: 850, aluguel: 110, casa1: 500, casa2: 1500, casa3: 2500, casa4: 3000, hotel: 4000, proprietario: " não"},
            {id: 15, nome: "Ipanema", cor: "amarelo", valorCompra: 850, aluguel: 110, casa1: 500, casa2: 1500, casa3: 2500, casa4: 3000, hotel: 4000, proprietario: " não"},
            {id: 16, nome: "Barra da Tijuca", cor: "amarelo", valorCompra: 1000, aluguel: 150, casa1: 600, casa2: 1700, casa3: 2600, casa4: 3200, hotel: 4500, proprietario: " não"},
            {id: 17, nome: "Flamengo", cor: "verde", valorCompra: 1200, aluguel: 200, casa1: 800, casa2: 2200, casa3: 3200, casa4: 4000, hotel: 5000, proprietario: " não"},
            {id: 18, nome: "Botafogo", cor: "verde", valorCompra: 1200, aluguel: 200, casa1: 800, casa2: 2200, casa3: 3200, casa4: 4000, hotel: 5000, proprietario: " não"},
            {id: 19, nome: "Lagoa", cor: "verde", valorCompra: 1400, aluguel: 240, casa1: 900, casa2: 2600, casa3: 3600, casa4: 4400, hotel: 5200, proprietario: " não"},
            {id: 20, nome: "Jardim Botânico", cor: "azulEscuro", valorCompra: 1500, aluguel: 300, casa1: 1000, casa2: 3000, casa3: 4000, casa4: 5000, hotel: 6000, proprietario: " não"},
            {id: 21, nome: "Praia de Botafogo", cor: "azulEscuro", valorCompra: 2000, aluguel: 400, casa1: 1500, casa2: 4500, casa3: 6000, casa4: 7500, hotel: 9000, proprietario: " não"}
        ]
    })

    const atualizarDados = (index, novoValor) => {
        setDados(prevState => ({
            ...prevState,
            propriedades: prevState.propriedades.map((item, i) =>
                i === index ? novoValor : item
            ),
        }));
    };


    // const buyPropriedade = (index, compra) ={
    //     setDados(prevState) =>(
    //         {
    //             ...prevState, prevState.propriedade.map((item, i)=>
    //             i === index )
    //         }
    //     )
    // }



        return (
            <ArchiveCentral.Provider value={{ dados, atualizarDados }}>
                {children}
            </ArchiveCentral.Provider>
        )
    
}

export { ArchiveCentral, ArchiveCentralProvider };