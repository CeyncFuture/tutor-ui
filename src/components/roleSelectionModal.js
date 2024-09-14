import React, {useState} from 'react';
import Button from '@mui/material/Button';
import {useDispatch} from "react-redux";
import userActions from "../actions/user";
import TutorQuestionnaire from "./TutorQuestionnaire";
import {Box, Dialog, DialogContent} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const  RoleSelectionModal = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (questionnaire) => {
    setIsModalOpen(false);
    updateUser({...questionnaire, role: 'tutor'})
  };

  const updateUser = (payload) => {
    dispatch(userActions.updateUserProfile(payload))
  }

  return (
    <div className="role-selection-container">
      <div className="role-selection-form">
        <h2>Register as... </h2>
        <Button variant="contained" color="primary" onClick={()=>{updateUser({role: 'student'})}}>
          Student
        </Button>
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          Tutor
        </Button>
        <Dialog
          onClose={handleCloseModal}
          aria-labelledby="customized-dialog-title"
          open={isModalOpen}
        >
          <Box style={{display: 'flex', justifyContent: 'flex-end', paddingTop: '10px'}}>
            <Button
                aria-label="close"
                onClick={()=>setIsModalOpen(false)}
            >
              <CloseIcon style={{color:'black'}}/>
            </Button>
          </Box>
          <DialogContent>
            <TutorQuestionnaire handleSubmit={handleCloseModal} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default RoleSelectionModal;
