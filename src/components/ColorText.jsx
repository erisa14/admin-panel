import { Box } from "@mui/material";

function ColorText({color, children}) {
  return (
    <Box sx={{color: color}} component="span">{children}</Box>
  )
}

export default ColorText; 
