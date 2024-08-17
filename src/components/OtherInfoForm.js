import React, {useState} from 'react';
import {
    TextField,
    Button,
    Box,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    InputAdornment,
    Grid
} from '@mui/material';
import {devices, employments} from "../utils/constants";

const OtherInfoForm = ({setStep, questionnaire, setQuestionnaire}) => {
    const [answers, setAnswers] = useState(questionnaire);

    const handleChange = (e) => {
        setAnswers({...answers, [e.target.name]: e.target.value});
    }

    const handleNext = () => {
        setQuestionnaire({...questionnaire, ...answers});
        setStep(4);
    }

    const handlePrevious = () => {
        setQuestionnaire({...questionnaire, ...answers});
        setStep(2);
    }

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormLabel>Do you own a smartphone, tablet, computer, or notebook?</FormLabel>
                    <RadioGroup
                        name="device"
                        value={answers.device ? answers.device : devices.MOBILE.key}
                        onChange={handleChange}
                    >
                        {
                            Object.values(devices)?.map((device, index) => (
                                <FormControlLabel
                                    key={index}
                                    value={device.key}
                                    control={<Radio/>}
                                    label={device.name}
                                />
                            ))
                        }
                    </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                    <FormLabel>Today, which of these options best describes your current situation?</FormLabel>
                    <RadioGroup
                        name="employment"
                        value={answers.employment ? answers.employment : employments.HIGH_SCHOOL_STUDENT.key}
                        onChange={handleChange}
                    >
                        {
                            Object.values(employments)?.map((employment, index) => (
                                <FormControlLabel
                                    key={index}
                                    value={employment.key}
                                    control={<Radio/>}
                                    label={employment.name}
                                />
                            ))
                        }
                    </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="How many hours per week do you plan to work online(hours)?"
                        name="work_hours"
                        id="workHours"
                        value={answers.work_hours ? answers.work_hours : ""}
                        fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Hrs</InputAdornment>,
                        }}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="What are your expectations for monthly online earnings ($)?"
                        name="exp_earnings"
                        id="expEarnings"
                        value={answers.exp_earnings ? answers.exp_earnings : ""}
                        fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
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

export default OtherInfoForm;
