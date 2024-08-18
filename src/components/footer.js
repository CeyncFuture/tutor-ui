import React from "react";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { blueGrey, pink, red } from "@mui/material/colors";


const footer = () => {
    return (
        <div className="footer-container"> 

           <div className="footer-flax">
            <div class="item auto">
            <a href="://https://www.facebook.com/">
            <FacebookRoundedIcon  fontSize="large"/> 
            </a>
            </div>
            <div class="item auto">
            <a href="https://whatsapp.com">
            <WhatsAppIcon fontSize="large"sx={{color: blueGrey[500]}}/> 
            </a>
            </div>
            <div class="item auto">
            <a href="https://gmail.com">
            <EmailRoundedIcon fontSize="large"/>
            </a>
            </div>

            </div>


          
            
           
            <p>&copy;2024 <a href="https://ceyncfuture.live">ceyncfuture.</a>All rights reserved</p>

        </div>
        

    );
}
export default footer;