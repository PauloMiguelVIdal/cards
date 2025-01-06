import React, { useEffect, useState } from "react";
import TemplateCards from "./TemplateCards.jsx";
import {ArchiveCentral} from "./ArchiveCentral.jsx";
import Modifications from "./Modifications.jsx";
import ListCards from "./ListCards.jsx";

function InterfaceCards() {

    


    return (
        <div>
            <Modifications />
            <TemplateCards />
            <ArchiveCentral />
            <ListCards/>
        </div>
    )

}
export default InterfaceCards