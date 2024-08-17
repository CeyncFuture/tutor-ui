import React, {useState} from 'react';
import Button from '@mui/material/Button';
import {useDispatch} from "react-redux";
import userActions from "../actions/user";
import TutorQuestionnaire from "./TutorQuestionnaire";
import {Box, Modal} from "@mui/material";
import {tutorActions} from "../actions/tutor";

const  RoleSelectionModal = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    updateUserRole('tutor')
  };

  const updateUserRole = (role) => {
    dispatch(userActions.updateUserRole(role));
    //TODO: add user data update API call
  }

  const handleSubmit = (questionnaire, navigate) => {
    handleCloseModal();

    dispatch(tutorActions.saveQuestionnaire({...questionnaire, user_role: 'tutor'}, navigate));
  }

  return (
    <div className="role-selection-container">
      <div className="role-selection-form">
        <h2>Register as... </h2>
        <Button variant="contained" color="primary" onClick={()=>{updateUserRole('student')}}>
          Student
        </Button>
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          Tutor
        </Button>
        <Modal
          open={isModalOpen}
          onClose={handleCloseModal}
        >
          <Box>
            <TutorQuestionnaire handleSubmit={handleSubmit} />
          </Box>
        </Modal>

      </div>
    </div>
  );
}

export default RoleSelectionModal;
