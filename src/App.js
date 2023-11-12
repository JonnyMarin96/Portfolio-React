import './App.css';
import './reset.css'

import Tema from './Components/Temas';
import Menu from './Components/Menu/Menu';
import SobreMis from './Components/SobreMi/SobreMi';

import Inicio from './Components/Inicio/Inicio';
import { ThemeProvider } from '@mui/material';

function App() {
  return (<ThemeProvider theme={Tema}>
    <Menu/>
    <Inicio/>
  </ThemeProvider>)
}

export default App