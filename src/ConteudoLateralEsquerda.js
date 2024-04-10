import img from './imagens/logo.png';
import Menu from './TextMenu';



export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <img src={img} id='img' alt='logo'/>
            <p>Exemplo de conteúdo lateral esquerda</p>
            <ul>
                <Menu nome="Home"/>
                <Menu nome="Buscar"/>
                <Menu nome/>
                <Menu nome/>
            </ul>
        </div>
    )
}

