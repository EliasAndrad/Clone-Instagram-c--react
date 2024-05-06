// Stories.js

import React from 'react';
import Story from "./Story";
import './Stories.css';

const listaUsuarios = [
    /*{
        nome: "Maria",
        url: "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imagemDeFundo: "https://i.pinimg.com/564x/14/b1/1a/14b11a8d713964e110906da92070edb9.jpg"
    },*/
    {
        nome: "Jessica",
        url: "https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imagemDeFundo: "https://www.segurospromo.com.br/blog/wp-content/uploads/2016/09/dicas-para-nao-pesar-o-bolso-na-sua-viagem-para-praia-quanto-custa.jpg" 
    },
    {
        nome: "Arthur",
        url: "https://images.pexels.com/photos/2048434/pexels-photo-2048434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imagemDeFundo: "https://www.otempo.com.br/image/contentid/policy:1.2890008:1709061984/Bugatti-Centodieci-2020-1280-13-jpg.jpg?f=3x2&w=1224"
    },
    {
        nome: "Marcos",
        url: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imagemDeFundo: "https://clickpetroleoegas.com.br/wp-content/uploads/2023/11/cursos-profissionalizantes-gratuitos-instituto-proa-anuncia-a-abertura-de-8-mil-vagas-no-rio-de-janeiro-830x450.jpg"
    },
    {
        nome: "Fernanda",
        url: "https://images.pexels.com/photos/2144413/pexels-photo-2144413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imagemDeFundo: "https://portaledicase.com/wp-content/uploads/2023/08/Golden-retriever.jpg"
    },
    {
        nome: "Caio",
        url: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imagemDeFundo: "https://faro.edu.br/wp-content/uploads/2018/09/229307-x-dicas-para-economizar-durante-a-faculdade-para-a-festa-de-formatura.jpg"
    }
];

export default function Stories() {
    return (
        <div className="Stories">
            {listaUsuarios.map((usuario, index) => (
                <Story
                    key={index}
                    nomeUsuario={usuario.nome}
                    caminhoDaImagem={usuario.url}
                    imagemDeFundo={usuario.imagemDeFundo}
                />
            ))}
        </div>
    );
}
