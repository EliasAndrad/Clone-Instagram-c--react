import React from "react"


export default function Sugestao(props){
    return(
        <div className="Sugestao">
            <div className="imagemPerfil">
                <img src={props.caminhoDaImagem} alt="imagem de perfil" className="sugestaoPerfil"/>
            </div>
            <div className="nomeSugestao">
                <p>{props.nomeUsuario}</p>
            </div>
        </div>
    )
}

