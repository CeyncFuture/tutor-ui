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

// import React, { useState } from "react";
// import { Box, Typography, Button } from "@mui/material";
// import { Dialog, DialogContent } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import TutorQuestionnaire from "./TutorQuestionnaire";
// import { useDispatch } from "react-redux";
// import userActions from "../actions/user";
// import student from "../assets/icon/student.png";
// import tutor from "../assets/icon/teacher.png";

// const RoleSelector = () => {
//   const dispatch = useDispatch();
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = (questionnaire) => {
//     console.log("++++++++++++++++++++++++++++++++++++++++++++++++++");
//     console.log(questionnaire);
    
//     setIsModalOpen(false);
//     // updateUser({ ...questionnaire, role: "tutor" });
//   };

//   const updateUser = (payload) => {
//     dispatch(userActions.updateUserProfile(payload));
//   };

//   return (
//     <div className="role-selection-container">
//       <div className="role-selection-form">
//         <Box className="role-selector">
//           <Typography variant="h5" className="title">
//             Please select your role
//           </Typography>
//           <Box className="roles-container">
//             <Button variant="full" className={`role-button active`} onClick={handleOpenModal}>
//               <Box className="icon">
//                 <img src={tutor} alt="Tutor"/>
//               </Box>
//               <Typography>Tutor</Typography>
//             </Button>
//             <Button variant="outlined" className={`role-button active`}  onClick={()=>{updateUser({role: 'student'})}}>
//               <Box className="icon">
//                 <img src={student} alt="student"/>
//               </Box>
              
//               <Typography>Student</Typography>
//             </Button>
//           </Box>
//         </Box>
//         <Dialog
//           onClose={handleCloseModal}
//           aria-labelledby="customized-dialog-title"
//           open={isModalOpen}
//         >
//           <Box
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               paddingTop: "10px",
//             }}
//           >
//             <Button aria-label="close" onClick={() => setIsModalOpen(false)}>
//               <CloseIcon style={{ color: "black" }} />
//             </Button>
//           </Box>
//           <DialogContent>
//             <TutorQuestionnaire handleSubmit={handleCloseModal} />
//           </DialogContent>
//         </Dialog>
//       </div>
//     </div>
//   );
// };

// export default RoleSelector;
