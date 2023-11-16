
import { Button } from '@mui/material'
import './MenuBoton.css'


const MenuBoton = (props) => {
    return(<>
        <Button className='BtnMenu' color='White'>
            <label className='label'> {props.titulo} </label>
        </Button>
            
    </>) 
}


export default MenuBoton