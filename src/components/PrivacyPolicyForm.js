import React, {useState} from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Checkbox} from "@mui/material";

const PrivacyPolicyForm = ({setStep, handleSubmit}) => {
    const [isAgreed, setIsAgreed] = useState(false);

    const handleChange = (e) => {
        setIsAgreed(e.target.checked);
    }

    return (
        <div>
            <Typography variant="body2" component="div" sx={{mb: 1}}>
                This is where your privacy policy content goes. You can add as much content as needed to explain
                your privacy policy in detail.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo et risus auctor,
                at aliquet felis sagittis. Suspendisse potenti. Cras ultricies, odio ac pharetra volutpat, odio
                turpis dictum quam, vel porta lorem lectus non ipsum.
                Morbi vitae nisl sed justo mollis congue. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia curae; Aenean nec eros nec purus interdum convallis.
            </Typography>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <Checkbox onChange={handleChange}/>
                <Typography variant="body2" component="div">
                    I agree to the privacy policy.
                </Typography>
            </Box>
            <Button
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 1}}
                disabled={!isAgreed}
                onClick={handleSubmit}
            >
                Finish
            </Button>
            <Button
                fullWidth
                variant="contained"
                onClick={() => setStep(3)}
            >
                Back
            </Button>
        </div>
    );
};

export default PrivacyPolicyForm;
