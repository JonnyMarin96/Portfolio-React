import './Contacto.css'
import RedesSociales from '../RedesSociales/RedesSociales'
import { Box, TextField } from '@mui/material'
import { Block } from '@mui/icons-material'


const Contacto = () => {
    return<>
        <section className='ContactoContainer'>
            <label className='Etiqueta'>Contactame!</label>
            <RedesSociales/>
            <form className='FormContacto'>
                <TextField variant="filled" className='Contacto' label='Nombre'/>
                <TextField variant="filled" className='Contacto' label='Correo'/>
                <TextField variant="filled" className='Contacto' label='Asunto'/>
                <TextField variant="filled" className='Contacto' label='Mensaje'/>
            </form>
        </section>
    </> 
}

export default Contacto