import { Box, Button, Link} from '@material-ui/core';
import { Facebook, LocationCity, GitHub, Twitter, WhatsApp } from '@material-ui/icons';
import '../styles/main.css';
export function Main(){
    return(
        <Box bgcolor="#eee" id="main_div">
            <Link href="https://www.github.com/incrediblenura">
            <Button color="#abcdef">
                <GitHub/> incrediblenura
            </Button>
            </Link>
            <Link href="https://www.twitter.com/arun2k2">
            <Button color="#abcdef">
                <Twitter/> arun2k2
            </Button>
            </Link>
            <Link href="#">
                <Button>
                    <WhatsApp/><img width="20px" height="15px" src="https://flagpedia.net/data/flags/w702/in.png"/> +91 9131004875
                </Button>
            </Link>
            <Button>
                <LocationCity/> Bilaspur Chhattisgarh India 495112
            </Button>
            <Button color="#abcdef">
                <Facebook/> Arun Kumar Kaushik
            </Button>
        </Box>
    );
}
export default Main;