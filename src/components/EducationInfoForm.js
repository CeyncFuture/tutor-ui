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
                    <TextField
                        label="What is your university? (if applicable) "
                        name="university"
                        id="university"
                        value={answers.university ? answers.university : ""}
                        fullWidth
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
            <Button
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 1}}
                disabled={answers.highest_education_qualification === undefined
                    || (answers.high_school === undefined || answers.high_school === "")
                    || (answers.degree === undefined || answers.degree === "")
                    || (answers.university === undefined || answers.university === "")}
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
