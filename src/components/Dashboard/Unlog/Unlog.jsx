import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
export default function Unlog(){
    const {user} =useSelector(state=>state.value);
    return(<Box>
        <Typography>
        {user}
        </Typography>
    </Box>)
}