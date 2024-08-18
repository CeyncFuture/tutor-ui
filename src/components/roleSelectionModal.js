import React, {useState} from 'react';
import Button from '@mui/material/Button';
import {useDispatch} from "react-redux";
import userActions from "../actions/user";
import TutorQuestionnaire from "./TutorQuestionnaire";
import {Box, Modal} from "@mui/material";

const  RoleSelectionModal = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (questionnaire) => {
    setIsModalOpen(false);
    updateUser({...questionnaire, user_role: 'tutor'})
  };

  const updateUser = (payload) => {
    dispatch(userActions.updateUserProfile(payload))
  }

  return (
    <div className="role-selection-container">
      <div className="role-selection-form">
        <h2>Register as... </h2>
        <Button variant="contained" color="primary" onClick={()=>{updateUser({user_role: 'student'})}}>
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
            <TutorQuestionnaire handleSubmit={handleCloseModal} />
          </Box>
        </Modal>

      </div>
    </div>
  );
}

export default RoleSelectionModal;
