import "./menu.css"

import MenuBoton from "../MenuBoton/MenuBoton"
import icono from "../../IMG/icono.png"

const Menu = () => {
    return <>
    <div className="menuContainer">

        <ul className="Menu">
            <img src={icono} alt="avatar" className="avatarImg"/>
            <MenuBoton titulo="INICIO" />
            <MenuBoton titulo="SOBRE MI" />
            <MenuBoton titulo="EDUCACIÓN" />
            <MenuBoton titulo="SKILLS" />
            <MenuBoton titulo="CONTACTO" />
        </ul>
    </div>
    
    </>
}


export default Menu