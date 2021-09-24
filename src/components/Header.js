import { Box, MenuItem } from "@material-ui/core";
// import { Image } from "@material-ui/icons";
// import { Main } from './Main';
export function Header(){
    return(
        <Box bgcolor="#eee">
            {/* <AppBar color="primary"> */}
                <img src='C:\\Users\\Arun\\Downloads\\photo.jpg' alt="Profile Photo"/>
                <MenuItem>
                    <MenuItem>Arun Kumar Kaushik</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </MenuItem>
            {/* </AppBar> */}
        </Box>
    );
}
export default Header;