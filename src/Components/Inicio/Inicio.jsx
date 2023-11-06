import './Inicio.css'
import "../root.css"

const Inicio = () => {
    return<>
        <section className='ContainerSobreMi'>
            <h1 className='Nombre'>Jonathan Marin</h1>
            <label className='Titulo'>Ing. en Sistemas computacionales y <br/> Desarrollador Front-end Jr</label>
            
            <p className='Presentacion'> 
                Mi misión es convertir ideas creativas en experiencias interactivas y atractivas.
                Estoy emocionado por seguir ampliando mis conocimientos y colaborar en proyectos desafiantes que me permitan exprimir al máximo mi creatividad y habilidades técnicas.
                ¡Siempre estoy listo para enfrentar nuevos retos y construir experiencias digitales asombrosas    
            </p>

            <ul>
                <li>Linked In</li>
                <li>Github</li>
                <li>Instagram</li>
                <li>Tiktok</li>
            </ul>
            <button className='btn_CV'>Descargar CV</button>
        </section>
    </>
}

export default Inicio