import { AppBar, Typography, Toolbar } from "@mui/material";
import theme from '../../theme.js'
import styles from './Footer.module.css'

export default function Footer() {
  const main = theme.palette.primary.main;
  const main2 = theme.palette.secondary.main;

  return (
    <AppBar
      component='footer'
      position="static"
      className={styles.footer}
    >
      <Toolbar >
        <Typography variant="body2" align="center" color={main2}>
          Este es el contenido del footer.
          
        </Typography>
        
      </Toolbar>
      
      <Toolbar>
        Contenido adicional del footer
      </Toolbar>
    </AppBar>
  );
}