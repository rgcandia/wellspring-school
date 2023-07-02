import { createBrowserRouter } from "react-router-dom";
import Index from "./components/Index/Index.jsx";
import Niveles from "./components/Niveles/Niveles.jsx";
import Institucional from "./components/Institucional/Institucional.jsx";
import DatosUtiles from './components/DatosUtiles/DatosUtiles.jsx'
import Examenes from "./components/Examenes/Examenes.jsx";
import ViajesEstudio from './components/ViajesEstudio/ViajesEstudio.jsx'
import Proyeccion from './components/Proyeccion/Proyeccion.jsx'
import Admision from "./components/Admision/Admision.jsx";
import Contacto from './components/Contacto/Contacto.jsx'
const router = createBrowserRouter([
    {
        path: "/",
      element: <Index/>,
    
    },
    {
      path:'/institucional',
      element:<Institucional/>
    },{
      path:'/datos-utiles',
      element:<DatosUtiles/>
    },
    {
      path:'/niveles',
      element:<Niveles/>
    },
    {
      path:'/examenes',
      element:<Examenes/>
    },{
      path:'/viajes',
      element:<ViajesEstudio/>,
    },
    {
      path:'/proyeccion',
      element:<Proyeccion/>
    },
    {
      path:'/admision',
      element:<Admision/>
    },
    {
      path:'/contacto',
      element:<Contacto/>
    }

]);
export default router;