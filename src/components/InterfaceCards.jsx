import React, { useEffect, useState } from "react";
import TemplateCards from "./TemplateCards.jsx";
import {ArchiveCentral} from "./ArchiveCentral.jsx";
import Modifications from "./Modifications.jsx";
import ListCards from "./ListCards.jsx";

function InterfaceCards() {

    


    return (
        <div>
            <TemplateCards />
            <ArchiveCentral />
            <Modifications />
            <ListCards/>
        </div>
    )

}
export default InterfaceCards