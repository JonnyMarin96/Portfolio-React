import './Contacto.css'
import SendIcon from '@mui/icons-material/Send';

import * as React from 'react';
import { Button, TextField, TextareaAutosize as TextArea } from '@mui/material'


const Contacto = () => {
    return<>
        <section className='ContactoContainer'>
            <label className='Etiqueta'>Contactame!</label>
            <span className='ContactSpan'>jonny.yair.2@gmail.com</span>
            <span className='ContactSpan'>(+52) 922 116 6945</span>
            <form className='FormContacto'>

                <TextField fullWidth variant='filled' margin='normal' className='Contacto' color='Purple' label='Nombre *'/>
                <TextField fullWidth variant='filled' margin='normal' className='Contacto' color='Purple' label='Correo *'/>
                <TextField fullWidth variant='filled' margin='normal' className='Contacto' color='Purple' label='Asunto'/>
                <TextArea fullWidth variant='filled' className='ContactoTxtArea' color='Purple' label='Mensaje' placeholder='Mensaje *' minRows={10}/>

                <Button variant="contained" size="large" color='Green'  onClick={EnviarCorreo}>
                    <label className='LblEnviar'>Enviar</label>
                    <SendIcon/>
                </Button>
            </form>
        </section>
    </> 
}

export default Contacto


const EnviarCorreo = (e) => {
    e.preventDefault();
}