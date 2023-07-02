import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import {getLinks} from './services.js'
import { useTheme } from "@emotion/react";
export default function  NavListDrawer(){
   const theme = useTheme();
return(<Box sx={{fontStyle:'italic'}} >
     
    <nav>
    
    <List>
        {getLinks.map(e=>{
            return<ListItem key={e.label} >
                         <ListItemButton
                         component='a'
                         href={e.href}
                         >
                         <ListItemText  primary={e.label}/>
                         </ListItemButton>
                        
                  </ListItem>
                  
        })}
    </List>
    <Divider/>
    </nav>
</Box>
)
}