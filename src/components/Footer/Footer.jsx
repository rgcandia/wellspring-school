import { Container , Typography} from "@mui/material";
export default function Footer(){

    return(
        <Container
         sx={{position: "fixed", bottom: 0, width: "100%"}}
        >
        <Typography variant="body2" align="center" color="textSecondary">
          Este es el contenido del footer.
        </Typography>
        </Container>)
}