import { AppBar, Typography, Toolbar, Box, Button } from "@mui/material";
import theme from '../../theme.js'
import styles from './Footer.module.css'
import {getRedes, getIconsFooter} from './services.js'
export default function Footer() {
  const main = theme.palette.primary.main;
  const main2 = theme.palette.secondary.main;

  return (
    <AppBar
      component='footer'
      position="static"
      className={styles.footer}
    >
      <Toolbar className={styles.toolbar1} >
       
    {
      getIconsFooter.map(e=>{
        return(
          <Box
          className={styles.box1}
          >
            <img src={e.path}/>
          </Box>
        )
      })
    }
       
      </Toolbar>
      
      <Toolbar  className={styles.toolbar2}>
      
        {getRedes.map(e=>{
          return(
            <Box 
            key={e.path} className={styles.box2}> 
              <img src={e.path}/>
            </Box>
           
        
          )
        })}
       
      </Toolbar>
    </AppBar>
  );
}