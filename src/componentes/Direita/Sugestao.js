import React from "react"
import "./sugestoes.css"


export default function Sugestao(props){
    return(
        <>

            <div className="Sugestao">
                <div className="content">
                    <div className="imagemPerfil">
                        <img src={props.caminhoDaImagem} alt="imagem de perfil" className="sugestaoPerfil"/>
                    </div>
                    <div className="nomeSugestao">
                        <div className="sugestaoSeguir">
                            <h5>{props.nomeUsuario}</h5>
                        </div>
                        <div className="siga">
                            <p>{props.codigoUsuario}</p>
                        </div>
                    </div>
                    <p className="seguir">Seguir</p>
                </div>                
            </div>
        </>
    )
}

