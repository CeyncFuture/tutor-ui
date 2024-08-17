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

const TutoringInfoForm = ({setStep, questionnaire, setQuestionnaire}) => {
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
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormLabel>Do you have Previous Teaching/Tutoring Experience?</FormLabel>
                    <RadioGroup
                        name="prev_experience"
                        value={answers.prev_experience ? answers.prev_experience : "yes"}
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
                subject form here
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
