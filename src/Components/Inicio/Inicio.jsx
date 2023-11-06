import './Inicio.css'
import "../root.css"

const Inicio = () => {
    return<>
        <section className='ContainerInicio'>
            <h1 className='Nombre'>Jonathan Marin</h1>
            <label className='Titulo'>Desarrollador Front-end Jr</label>

            <ul>
                <li>Linked In</li>
                <li>Github</li>
                <li>Instagram</li>
                <li>Tiktok</li>
            </ul>
            <input className='btn_CV' type='button' value='Descargar CV'/>
        </section>
    </>
}




export default Inicio