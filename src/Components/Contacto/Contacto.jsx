import './Contacto.css'
import RedesSociales from '../RedesSociales/RedesSociales'

import * as React from 'react';
import { Button, TextField } from '@mui/material'


const Contacto = () => {
    return<>
        <section className='ContactoContainer'>
            <label className='Etiqueta'>Contactame!</label>
            <RedesSociales/>
            <form className='FormContacto'>
                <TextField variant='filled' margin='normal' className='Contacto' color='Green' label='Nombre'/>
                <TextField variant='filled' margin='normal' className='Contacto' color='Green' label='Correo'/>
                <TextField variant='filled' margin='normal' className='Contacto' color='Green' label='Asunto'/>
                <TextField variant='filled' margin='normal' className='Contacto' color='Green' label='Mensaje'/>
                <Button variant='contained' size='large' color='Green' onClick={EnviarCorreo}>Enviar</Button>
            </form>
        </section>
    </> 
}

export default Contacto


const EnviarCorreo = (e) => {
    e.preventDefault();
}