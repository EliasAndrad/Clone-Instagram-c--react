import './Feed.css';

import Post from './Post/Post';

export default function Feed() {
    return (
        <div className="Feed">
            <Post
                imgPerfil="https://this-person-does-not-exist.com/img/avatar-gen11069a85ac9412b7a67bc2f7846bab08.jpg"
                nomeUsuario="Carol"
                descricao="Ilhabela, SP"
                imgSrc="https://images.pexels.com/photos/111085/pexels-photo-111085.jpeg"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc." />
            <Post
                imgPerfil="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                descricao="São Paulo, SP"
                nomeUsuario="Marcos"
                imgSrc="https://images.pexels.com/photos/221446/pexels-photo-221446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc." />
        </div>
    )
}