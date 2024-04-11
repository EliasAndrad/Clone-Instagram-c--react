import {FaTwitter}  from "react-icons/fa";



export default function TextMenu(propiedade) {
    return (
      <li className='text-menu'>
          <span>{propiedade.icone}</span>
          <span>{propiedade.nome}</span>
          {/* <FaTwitter/> */}
      </li>
    );
  }