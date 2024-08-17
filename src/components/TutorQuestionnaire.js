import React, {useState} from 'react';
import {useNavigate} from "react-router";
import {
    Container,
    Box,
    Typography,
    Step,
    StepLabel,
    Stepper
} from "@mui/material";
import BasicInfoForm from "./BasicInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import TutoringInfoForm from "./TutoringInfoForm";
import OtherInfoForm from "./OtherInfoForm";
import PrivacyPolicyForm from "./PrivacyPolicyForm";

const steps = [
    "Basic Information",
    "Educational Qualifications",
    "Tutoring Experience",
    "Other Information",
    "Privacy Policy"
]

export const TutorQuestionnaire = ({handleSubmit}) => {
    const [questionnaire, setQuestionnaire] = useState({});
    const [step, setStep] = useState(0);
    const navigate = useNavigate();

    return (
        <Container component="main" maxWidth="sm" sx={{p: 5}}>
            <Box sx={{bgcolor: 'white', padding: 3, maxHeight: '80vh', overflowY: 'scroll'}}>
                <Typography variant="h6" textAlign='center' sx={{mb: 2}}>
                    You are just few steps away from becoming a verified tutor...
                </Typography>
                <Stepper activeStep={step} alternativeLabel sx={{mb: 4}}>
                    {steps.map((label, index) => (
                        <Step key={index}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {step === 0 && <BasicInfoForm
                    setStep={setStep}
                    questionnaire={questionnaire}
                    setQuestionnaire={setQuestionnaire}
                />}
                {step === 1 && <EducationInfoForm
                    setStep={setStep}
                    questionnaire={questionnaire}
                    setQuestionnaire={setQuestionnaire}
                />}
                {step === 2 && <TutoringInfoForm
                    setStep={setStep}
                    questionnaire={questionnaire}
                    setQuestionnaire={setQuestionnaire}
                />}
                {step === 3 && <OtherInfoForm
                  setStep={setStep}
                  questionnaire={questionnaire}
                  setQuestionnaire={setQuestionnaire}
                />}
                {step === 4 &&
                <PrivacyPolicyForm
                  setStep={setStep}
                  handleSubmit={()=>handleSubmit(questionnaire, navigate)}
                />}
            </Box>
        </Container>
    );
};

export default TutorQuestionnaire;
