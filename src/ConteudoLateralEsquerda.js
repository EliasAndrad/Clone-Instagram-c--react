import img from './imagens/logo.png';
import Menu from './TextMenu';
import { IoHome } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { BiMessageRounded } from "react-icons/bi";
import { CgMoreO } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";







export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <img src={img} id='img' alt='logo'/>
            {/* <p>Exemplo de conteúdo lateral esquerda</p> */}
            <ul>
                <Menu nome="Home" icone={<IoHome />}/>
                <Menu nome= "Pesquisar" icone={<IoIosSearch />}/>
                <Menu nome="Notificações" icone={<FaRegHeart />}/>
                <Menu nome="Mensagens" icone={<BiMessageRounded/>}/>
                <Menu nome="Create" icone={<CgMoreO />}/>

            </ul>

            <div className='profile'>
                <Menu nome="Perfil" icone={<FaUserCircle />}/>
            </div>
        </div>
    )
}

