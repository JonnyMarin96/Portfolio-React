import './Inicio.css'
import "../root.css"
import { Button } from '@mui/material'

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
            
            <div>
                <Button variant="contained" className='asd'>
                    <span className='BtnSpanCv'>Descargar CV</span>
                </Button>
            </div>
        </section>
    </>
}




export default Inicio