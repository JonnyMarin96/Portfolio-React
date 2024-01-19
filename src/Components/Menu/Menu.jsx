import "./menu.css"
import "../root.css"

import MenuBoton from "../MenuBoton/MenuBoton"
import icono from "../../IMG/icono.png"
import RedesSociales from "../RedesSociales/RedesSociales"

const Menu = () => {
    return <>
    <section className="menuContainer">

        <ul className="Menu">
            <MenuBoton titulo="INICIO" />
            <MenuBoton titulo="SOBRE MI" />
            <MenuBoton titulo="PROYECTOS" />
            <MenuBoton titulo="SKILLS" />
            <MenuBoton titulo="EDUCACIÓN" />
            <MenuBoton titulo="CONTACTO" />
        </ul>
    </section>
    
    </>
}


export default Menu