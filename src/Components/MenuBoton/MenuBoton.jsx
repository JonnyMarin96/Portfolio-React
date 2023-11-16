
import { Button } from '@mui/material'
import './MenuBoton.css'


const MenuBoton = (props) => {
    return(<>
            <Button className='label'> {props.titulo} </Button>
            <p >  </p>
    </>) 
}


export default MenuBoton