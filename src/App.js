import './App.css';
import './reset.css'

import Tema from './Components/Temas';
import Menu from './Components/Menu/Menu';
import SobreMi from './Components/SobreMi/SobreMi';
import Proyectos from './Components/Proyectos/Proyectos';
import Contacto from './Components/Contacto/Contacto';
import Skills from './Components/Skills/Skills';

import Inicio from './Components/Inicio/Inicio';
import { ThemeProvider } from '@mui/material';

function App() {
  return (<ThemeProvider theme={Tema}>
    <Menu/>
    <Inicio/>
    <SobreMi/>
    <Proyectos/>
    <Skills/>
    <Contacto/>
  </ThemeProvider>)
}

export default App