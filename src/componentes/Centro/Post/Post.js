import { useState } from "react";

import './Post.css';
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";






export default function Post(props) {
    const [likes, setLikes] = useState(0);

    let color;


    if (likes === 0) {
        color = "black"
    } else {
        color = "red"
    }


    return (
        <div className="card Post">
            <div className="card-header">
                <img src={props.imgPerfil} alt="" className="" />
                <div className="conteudoHeaderPost">
                    <h5>{props.nomeUsuario}</h5>
                    <p>{props.descricao}</p>
                </div>

            </div>
            <div className="card-body">
                <img src={props.imgSrc} />
                <div className="icons">

                    <FaRegHeart
                        className="icon"
                        onClick={() => setLikes(likes + 1)}
                        style={{ fontSize: '20px', color: color, cursor: 'pointer' }}
                    />
                    <FaRegCommentAlt className="icon"/>
                    <FaRegShareSquare className="icon"/>

                </div>

                <p>{props.body}</p>
            </div>
            <div className="card-footer">
            </div>
        </div>
    )
}


// return (
//         <div className="imagem-perfil">
//             <img src={props.caminhoDaImagem} alt="Imagem do Story" className="imagem-story"/>
//         </div>
//         <div className="nome-usuario">
//             <p>{props.nomeUsuario}</p>
//         </div>
//     </div>
// )