import React from "react";
import Sugestao from "./Sugestao";

const perfisSugerido = [
    {
        url: "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nome: "jessica"
    }
]

export default function Sugestoes(){
    return(
        <div className="sugestoes">
            {perfisSugerido.map((usuario, index )=> (
                <Sugestao
                key={index}
                caminhoDaImagem={usuario.url}
                nomeUsuario={usuario.nome}
                />
            ))}
        </div>
    )
}

