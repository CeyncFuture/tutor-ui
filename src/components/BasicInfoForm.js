import React, {useState} from 'react';
import {
    TextField,
    Button,
    Box,
    Select,
    MenuItem,
    Grid,
    FormControl,
    InputLabel
} from '@mui/material';
import {countries} from "../utils/constants";

const BasicInfoForm = ({setStep, questionnaire, setQuestionnaire}) => {
    const [answers, setAnswers] = useState(questionnaire);

    const handleChange = (e) => {
        setAnswers({...answers, [e.target.name]: e.target.value});
    }

    const handleNext = () => {
        setQuestionnaire({...questionnaire, ...answers});
        setStep(1);
    }

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Address"
                        name="address"
                        id="address"
                        value={answers.address ? answers.address : ''}
                        fullWidth
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="country-label">Select Your Country</InputLabel>
                        <Select
                            label="Select Your Country"
                            name="country"
                            id="country"
                            labelId="country-label"
                            value={answers.country}
                            onChange={handleChange}
                            variant="outlined"
                        >
                            {
                                Object.values(countries).map((country, index) => (
                                    <MenuItem key={index} value={country.key}>{country.name}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Phone Number"
                        name="phone_number"
                        id="phoneNumber"
                        value={answers.phone_number ? answers.phone_number : ''}
                        fullWidth
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
            <Button
                fullWidth
                variant="contained"
                sx={{mt: 3}}
                onClick={handleNext}
            >
                Next
            </Button>
        </Box>
    );
};

export default BasicInfoForm;
