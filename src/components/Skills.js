import { Box, Link, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import '../styles/main.css';
import Header from './Header';
export function Skills(){
    return(
        <Box bgcolor="#eee">
            <h1>Skills</h1>
            <ul id="ul_list">
                <li><img src="https://img.shields.io/badge/REACT-deepskyblue?style=for-the-badge&logo=react&logoColor=black"/></li>
                <li><img src="https://img.shields.io/badge/JAVASCRIPT-yellow?style=for-the-badge&logo=javascript&logoColor=white"/></li>
                <li><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/></li>
                <li><img src="https://img.shields.io/badge/GIT-purple?style=for-the-badge&logo=git&logoColor=white"/></li>
                <li><img src="https://img.shields.io/badge/CSS5-aqua?style=for-the-badge&logo=css3&logoColor=black"/></li>
                <li><img src="https://img.shields.io/badge/MONGODB-green?style=for-the-badge&logo=mongodb&logoColor=white"/></li>
                <li><img src="https://img.shields.io/badge/EXPRESS-E34F26?style=for-the-badge&logo=express&logoColor=white"/></li>
                <li><img src="https://img.shields.io/badge/AXIOS-E34F26?style=for-the-badge&logo=axios&logoColor=white"/></li>
                <li><img src="https://img.shields.io/badge/ROUTER-E34F26?style=for-the-badge&logo=router&logoColor=white"/></li>
                <li><img src="https://img.shields.io/badge/jest-brown?style=for-the-badge&logo=jest&logoColor=white"/></li>
            </ul>
        </Box>
    );
}
export default Skills;