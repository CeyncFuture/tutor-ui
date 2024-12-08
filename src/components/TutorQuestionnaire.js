import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import {
  Container,
  Box,
  Typography,
  Step,
  StepLabel,
  Stepper,
  useMediaQuery,
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
  "Privacy Policy",
];

export const TutorQuestionnaire = ({ handleSubmit }) => {
  const isMobile = useMediaQuery("(max-width:600px)"); // Detect mobile devices

  const [questionnaire, setQuestionnaire] = useState({});
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const stepperRef = useRef(null);

  useEffect(() => {
    if (stepperRef.current) {
      const targetElement = stepperRef.current.querySelector(".stepper-title");

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [step]);

  return (
    <Container
      ref={stepperRef}
      component="main"
      maxWidth="sm"
      sx={{
        p: 5,
        "@media (max-width:600px)": {
          p: 0, // Remove padding for mobile devices
        },
      }}
    >
      <Box sx={{ bgcolor: "white", padding: 3, maxHeight: "80vh" }}>
        <Typography
          variant="h6"
          className="stepper-title"
          textAlign="center"
          sx={{ mb: 2 }}
        >
          You are just few steps away from becoming a verified tutor...
        </Typography>
        {isMobile ? (
          // Mobile-friendly stepper
          <Box>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", mb: 2, mt: 4 }}
            >
              Step {step + 1} of {steps.length}: {steps[step]}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                mb: 4,
              }}
            >
              {steps.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor:
                      index === step ? "primary.main" : "grey.400",
                  }}
                />
              ))}
            </Box>
          </Box>
        ) : (
          // Standard Stepper for larger devices
          <Stepper activeStep={step} alternativeLabel sx={{ mb: 4 }}>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        )}
        {/* <Stepper activeStep={step} alternativeLabel sx={{mb: 4}}>
                    {steps.map((label, index) => (
                        <Step key={index}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper> */}
        {step === 0 && (
          <BasicInfoForm
            setStep={setStep}
            questionnaire={questionnaire}
            setQuestionnaire={setQuestionnaire}
          />
        )}
        {step === 1 && (
          <EducationInfoForm
            setStep={setStep}
            questionnaire={questionnaire}
            setQuestionnaire={setQuestionnaire}
          />
        )}
        {step === 2 && (
          <TutoringInfoForm
            setStep={setStep}
            questionnaire={questionnaire}
            setQuestionnaire={setQuestionnaire}
          />
        )}
        {step === 3 && (
          <OtherInfoForm
            setStep={setStep}
            questionnaire={questionnaire}
            setQuestionnaire={setQuestionnaire}
          />
        )}
        {step === 4 && (
          <PrivacyPolicyForm
            setStep={setStep}
            handleSubmit={() => handleSubmit(questionnaire, navigate)}
          />
        )}
      </Box>
    </Container>
  );
};

export default TutorQuestionnaire;
