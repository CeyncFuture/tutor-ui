import React, {useState} from 'react';
import {
    TextField,
    Button,
    Box,
    Grid,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@mui/material';
import DropDownSelector from "./DropDownSelector";
import {useSelector} from "react-redux";

const TutoringInfoForm = ({setStep, questionnaire, setQuestionnaire}) => {
    const subjects = useSelector((state) => state.common.subjects);
    const [answers, setAnswers] = useState(questionnaire);

    const handleChange = (e) => {
        setAnswers({...answers, [e.target.name]: e.target.value});
    }

    const handleNext = () => {
        setQuestionnaire({...questionnaire, ...answers});
        setStep(3);
    }

    const handlePrevious = () => {
        setQuestionnaire({...questionnaire, ...answers});
        setStep(1);
    }

    return (
        <Box className="tutor-form-container">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormLabel>Do you have Previous Teaching/Tutoring Experience?</FormLabel>
                    <RadioGroup
                        name="previous_experience"
                        value={answers.previous_experience}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="yes" control={<Radio/>} label="Yes"/>
                        <FormControlLabel value="no" control={<Radio/>} label="No"/>
                    </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Physical methods and Any online - website include a few details to confirm?"
                        name="exp_confirmation"
                        id="expConfirmation"
                        value={answers.exp_confirmation ? answers.exp_confirmation : ""}
                        fullWidth
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <DropDownSelector
                      label="Which is the main tutoring area you are doing or are you willing to do?’ "
                      name="interests"
                      items={subjects}
                      interests={answers.interests}
                      onChange={handleChange}
                    />
                </Grid>
            </Grid>
            <Button
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 1}}
                onClick={handleNext}
            >
                Next
            </Button>
            <Button
                fullWidth
                variant="contained"
                onClick={handlePrevious}
            >
                Back
            </Button>
        </Box>
    );
};

export default TutoringInfoForm;
