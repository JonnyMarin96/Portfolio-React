import "./menu.css"
import "../root.css"

import MenuBoton from "../MenuBoton/MenuBoton"
import icono from "../../IMG/icono.png"
import RedesSociales from "../RedesSociales/RedesSociales"

const Menu = () => {
    return <>
    <div className="menuContainer">

        <ul className="Menu">
            <img src={icono} alt="avatar" className="avatarImg"/>
            <MenuBoton titulo="INICIO" />
            <MenuBoton titulo="SOBRE MI" />
            <MenuBoton titulo="PROYECTOS" />
            <MenuBoton titulo="SKILLS" />
            <MenuBoton titulo="EDUCACIÓN" />
            <MenuBoton titulo="CONTACTO" />
            <RedesSociales/>
        </ul>
    </div>
    
    </>
}


export default Menu