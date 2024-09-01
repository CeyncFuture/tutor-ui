import React, {useState} from 'react';
import {
    TextField,
    Button,
    Box,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Grid
} from '@mui/material';
import {educationQualifications, options} from "../utils/constants";

const EducationInfoForm = ({setStep, questionnaire, setQuestionnaire}) => {
    const [answers, setAnswers] = useState(questionnaire);

    const handleChange = (e) => {
        setAnswers({...answers, [e.target.name]: e.target.value});
    }

    const handleNext = () => {
        setQuestionnaire({...questionnaire, ...answers});
        setStep(2);
    }

    const handlePrevious = () => {
        setQuestionnaire({...questionnaire, ...answers});
        setStep(0);
    }

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormLabel>What is your highest education status ( Completed / Currently doing) </FormLabel>
                    <RadioGroup
                        name="highest_education_qualification"
                        value={answers.highest_education_qualification}
                        onChange={handleChange}
                    >
                        {
                            Object.values(educationQualifications)?.map((qualification, index) => (
                                <FormControlLabel
                                    key={index}
                                    value={qualification.key}
                                    control={<Radio/>}
                                    label={qualification.name}
                                />
                            ))
                        }
                    </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="What is your High School"
                        name="high_school"
                        id="highSchool"
                        value={answers.high_school ? answers.high_school : ""}
                        fullWidth
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Name of Your degree/ Major"
                        name="degree"
                        id="degree"
                        value={answers.degree ? answers.degree : ""}
                        fullWidth
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    {/* TODO: Changed proper label */}
                    <FormLabel>Send Your university? (if applicable) </FormLabel>
                    <RadioGroup
                        name="university"
                        value={answers.university}
                        onChange={handleChange}
                    >
                        {
                            Object.values(options)?.map((option, index) => (
                                <FormControlLabel
                                    key={index}
                                    value={option.key}
                                    control={<Radio/>}
                                    label={option.name}
                                />
                            ))
                        }
                    </RadioGroup>
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

export default EducationInfoForm;
