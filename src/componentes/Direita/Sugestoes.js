import React from "react";
import Sugestao from "./Sugestao";
import "./sugestao.css"

const perfisSugerido = [
    {
        url: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nome: "Carla Silva",
        codigo: "carlinha_0038"

    },
    {
        url: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nome: "André Santos",
        codigo: "désantos_011"

    },
    {
        url: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nome: "Fernando Carlos",
        codigo: "nando@123"

    },
    {
        url: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nome: "jessica Moreira",
        codigo: "Jeeh_moreira21"

    },

]

export default function ListaDeSugestoes(){
    return(
        <div className="sugestoes">
            <div className="profile">
                <img src="https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"/>
                <div className="textoProfile">
                    <h3>Usuario</h3>
                    <p>#user2024</p>
                </div>
               
            </div>
            <div className="titleSugestao">
                <h4>Sugestões Para Você</h4>
                <p>Ver tudo</p>
            </div>
            {perfisSugerido.map((usuario, index )=> (
                <Sugestao
                key={index}
                caminhoDaImagem={usuario.url}
                nomeUsuario={usuario.nome}
                codigoUsuario={usuario.codigo}
                />
            ))}
        </div>
    )
}

