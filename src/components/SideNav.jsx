import { Avatar, Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Menu, MenuItem, Sidebar, useProSidebar } from 'react-pro-sidebar'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import { Link, useLocation } from 'react-router-dom';

function SideNav (){
    const {collapsed}= useProSidebar();

    const theme= useTheme();
    const location= useLocation();

    return (
    <Sidebar style={{height: '100%', top: 'auto'}}
    breakPoint='md'
    backgroundColor="theme.palette.neutral.light"
    >
        <Box sx={styles.avatarContainer}>
            <Avatar src='/src/assets/avatars/user.png' alt='Channel Name' sx={styles.avatar} />
            {!collapsed ? <Typography variant='body2' sx={styles.yourChannel}> Your Channel</Typography> : null}
            {!collapsed ? <Typography variant='overline'> React With Me</Typography> : null}
        </Box>
        <Menu menuItemStyles={{
            button: ({active})=>{
                return{
                    backgroundColor: active ? theme.palette.neutral.medium : undefined 
                }
            },
        }}>
            <MenuItem active={location.pathname==='/'} component={<Link to="/"/>} icon={<DashboardOutlinedIcon />}>
                <Typography variant='body2'>Dashboard</Typography>
            </MenuItem>
            <MenuItem active={location.pathname==='/content'} component={<Link to="/content"/>} icon={<SourceOutlinedIcon />}>
                <Typography variant='body2'>Content</Typography>
            </MenuItem>
            <MenuItem active={location.pathname==='/analytics'} component={<Link to="/analytics"/>} icon={<AnalyticsOutlinedIcon />}>
                <Typography variant='body2'>Analytics</Typography>
            </MenuItem>
            <MenuItem active={location.pathname==='/customization'} component={<Link to="/customization"/>} icon={<StyleOutlinedIcon />}>
                <Typography variant='body2'>Customization</Typography>
            </MenuItem>
        </Menu>
    </Sidebar>
  )
}

/** @type {import ("@mui/material").SxProps} */
const styles = {
   avatarContainer: {
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       my: 5,
   },
   avatar: {
       width: '40%',
       height: 'auto',
   },
   yourChannel: {
       mt: 1,
   },
};
export default SideNav;
