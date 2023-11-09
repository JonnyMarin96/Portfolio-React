import './Inicio.css'
import "../root.css"

import DownloadIcon from '@mui/icons-material/Download';
import RedesSociales from '../RedesSociales/RedesSociales'

import { Button } from '@mui/material'

const Inicio = () => {
    return<>
        <section className='ContainerInicio'>
            <h1 className='Nombre'>Jonathan Marin</h1>
            <label className='Titulo'>Desarrollador Front-end Jr</label>

            <RedesSociales/>
            
            <div>
                <Button variant="contained">
                    <span className='BtnSpanCv'>Descargar CV</span>
                    <DownloadIcon/>
                </Button>
            </div>
        </section>
    </>
}




export default Inicio