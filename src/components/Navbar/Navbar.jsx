import { AppBar,   Button, Drawer, IconButton, Toolbar, Box } from "@mui/material";
import { useState } from "react";
import NavListDrawer from "../NavListDrawer/NavListDrawer";
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../../images/iconos_encabezado-wellspring.png'
import facebook from '../../images/iconos_encabezado-facebook_ic.png'
import instagram from '../../images/iconos_encabezado-instagram_ic.png'
import linkedin from '../../images/iconos_encabezado-linkedin_ic.png'
import { getLinks } from "../NavListDrawer/services";
import styles from './Navbar.module.css'
export default function Navbar(){
    const getIcons = [facebook,instagram,linkedin]
    const [open,setOpen] =  useState(false)
    return(<>
        <AppBar position="static" >
            <Toolbar className={styles.toolbar1}>
                <Box className={styles.box1} >
                    <IconButton color="secondary" onClick={()=>{setOpen(!open)}} >
                        <MenuIcon className={styles.iconButton}  />
                    </IconButton>
                </Box>
                <Box className={styles.box2} >
                    <img
                    className={styles.logo}
                    src={logo}
                    alt={logo.substring(30)}
                    />
                </Box>
                <Box className={styles.box3}>
                    {getIcons.map(e=>{
                        return<Button
                        key={e}
                        color="secondary"
                    
                        >
                           <img
                           className={styles.redes}
                           alt={e}
                           src={e}
                           />
                        </Button>
                    })}
                </Box>
                
            </Toolbar>
           

            <Toolbar className={styles.toolbar2} sx={{justifyContent:'center'}}>
                {getLinks.map(e=>{
                    return(<Button 
                        key={e.label}
                        variant='text'
                        color="secondary"
                        sx={{fontWeight:'200', margin:'10px'}}
                        >
                        {e.label}
                    </Button>)
                })}
            </Toolbar>
               <Drawer open={open} anchor="left" onClose={()=>{setOpen(!open)}}>
               <NavListDrawer/>
               </Drawer>
        </AppBar>
    </>)
}