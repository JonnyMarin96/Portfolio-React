import './SobreMi.css'
import ProfileImg from './profileImg.png'

const SobreMi = () => {
    return (

        <section className='SobreMiContainer'>
            <div>
                <img src={ProfileImg} alt="Foto Personal" className='FotoPersonal'/>
                <p className='Descripcion'>
                    Mi misión es convertir ideas creativas en experiencias interactivas y atractivas.
                    Estoy emocionado por seguir ampliando mis conocimientos y colaborar en proyectos desafiantes que me permitan
                    exprimir al máximo mi creatividad y habilidades técnicas. ¡Siempre estoy listo para enfrentar nuevos retos
                    y construir experiencias digitales asombrosas
                </p>
            </div>
        </section>
    )
}

export default SobreMi