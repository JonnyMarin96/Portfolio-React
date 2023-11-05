import "./menu.css"

import MenuBoton from "../MenuBoton/MenuBoton"

const Menu = () => {
    return <>
    <div className="menuContainer">
        <ul className="Menu">
            <MenuBoton titulo="Inicio" />
            <MenuBoton titulo="Sobre mí" />
            <MenuBoton titulo="Educacion" />
            <MenuBoton titulo="Skills" />
            <MenuBoton titulo="Contacto" />
        </ul>
    </div>
    
    </>
}


export default Menu