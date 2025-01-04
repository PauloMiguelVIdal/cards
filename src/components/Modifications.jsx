import React, { useContext } from "react";
import { ArchiveCentral } from "./ArchiveCentral";

function Modifications() {
    const { dados, atualizarDados } = useContext(ArchiveCentral);

    const teste = () => {
        console.log(dados.propriedades[0].valor); // Antes da alteração

        atualizarDados(0, {
            ...dados.propriedades[0],
            valor: dados.propriedades[0].valorCompra + 200,
        });

        console.log(dados.propriedades[0].valor); // Ainda será o antigo (estado não atualizado imediatamente)
    };

    return (
        <div>
            <button onClick={teste}>Teste</button>

            <h1>
                {dados.propriedades[0].nome}: {dados.propriedades[0].valor}
            </h1>
        </div>
    );
}

export default Modifications;