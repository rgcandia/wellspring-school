import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import {getLinks} from './services.js'
import { useTheme } from "@emotion/react";
import {Link} from  'react-router-dom';
export default function  NavListDrawer({handleOpen}){
   const theme = useTheme();
return(<Box 
sx={{fontStyle:'italic'}} >
     
    
    
    <List>
        {getLinks.map(e=>{
            return<ListItem key={e.label} >
                  <Link 
                            style={{textDecoration:'none',color:'inherit'}}
                            to={e.href}
                            onClick={handleOpen}
                            >
                         <ListItemButton
                         component='div'
                         sx={{padding:0}}
                         >
                         
                         <ListItemText  primary={e.label}/>
                         </ListItemButton>
                            </Link>
                        
                  </ListItem>
                  
        })}
    </List>
    <Divider/>
    
</Box>
)
}