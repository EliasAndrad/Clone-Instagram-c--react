import Sugestao from "./Sugestao"
import ListaDeSugestoes from "./Sugestoes"
import Sugestoes from "./Sugestoes"

export default function ConteudoLateralDireita(){
    return(
        <div className="ConteudoLateralDireita">
            {/* <Sugestao/> */}
            <ListaDeSugestoes/>

            <div className="abc">
                <li>Ajuda</li>
                <li>Privacidade</li>
                <li>Termos</li>
            </div>
            <div className="dev">
                <p>@2024 Elias Andrade</p>

            </div>
            
        </div>
    )

}

