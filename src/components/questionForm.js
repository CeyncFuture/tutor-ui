import React, { useState } from "react";
import { get } from "lodash";
import {
  TextField,
  Button,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import { createNotification } from "../utils/utils";
import fetch from "../utils/apiService";

const Input = styled("input")({
  display: "none",
});

const QuestionForm = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles((prevFiles) => [...prevFiles, ...Array.from(e.target.files)]);
  };

  const handleFileRemove = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let isFileLarge = false;

    files.forEach((file) => {
      if (file.size > 2097152) {
        isFileLarge = true;
      }
    });

    if (isFileLarge) {
      createNotification("error", "Maximum Allowed File Size is 2MB");
    } else {
      const formData = new FormData(event.currentTarget);
      files.forEach((file) => {
        formData.append("attachments", file);
      });

      fetch("/question", {
        method: "POST",
        body: formData,
        headers: {
          contentType: "multipart/form-data",
          accept: "multipart/form-data",
        },
      }).then((response) => {
        if (response.data) {
          console.log("Success:", response.data);
          setFiles([]);
          event.target.reset();
          createNotification(
            "success",
            get(response, "data.message", "Successfully created!")
          );
        } else {
          console.error("Error:", response.error);
          createNotification(
            "error",
            get(
              response,
              "error.response.data.message",
              "An unexpected error occurred."
            )
          );
        }
      });
    }
  };

  return (
    // <div className="question-form-container">
    //   <Box
    //     component="form"
    //     onSubmit={handleSubmit}
    //     sx={{
    //       backgroundColor: 'white',
    //       display: 'flex',
    //       flexDirection: 'column',
    //       alignItems: 'flex-start',
    //       justifyContent: 'space-around',
    //       p: 2,
    //       m: 2,
    //       border: '1px solid #ddd',
    //       borderRadius: 1,
    //       boxShadow: 1,
    //       padding: '2vh 10vw',
    //       minHeight: '500px'
    //     }}
    //   >

    //     <Typography variant="h5" component="h1" gutterBottom>
    //       Submit a Question
    //     </Typography>
    //       <TextField
    //           label="Whatsapp Number"
    //           variant="outlined"
    //           name="phone_number"
    //           required
    //           fullWidth
    //           sx={{ mb: 2 }}
    //       />
    //     <TextField
    //       label="Question"
    //       variant="outlined"
    //       name="question"
    //       required
    //       fullWidth
    //       multiline
    //       rows={5}
    //       sx={{ mb: 2 }}
    //     />
    //     <div className="question-form-attachments">
    //       <label htmlFor="attachments">
    //         <Input
    //           id="attachments"
    //           type="file"
    //           multiple
    //           onChange={handleFileChange}
    //         />
    //         <Button
    //           variant="contained"
    //           component="span"
    //           sx={{ mb: 2 }}
    //         >
    //           Upload Attachments
    //         </Button>
    //       </label>
    //       {files.length > 0 && (
    //         <List sx={{ mb: 2 }}>
    //           {files.map((file, index) => (
    //             <ListItem
    //               key={index}
    //               secondaryAction={
    //                 <IconButton edge="end" aria-label="delete" onClick={() => handleFileRemove(index)}>
    //                   <DeleteIcon />
    //                 </IconButton>
    //               }
    //             >
    //               <ListItemText primary={file.name} />
    //             </ListItem>
    //           ))}
    //         </List>
    //       )}
    //     </div>
    //     <Button
    //       type="submit"
    //       variant="contained"
    //       color="primary"
    //       fullWidth
    //     >
    //       Submit
    //     </Button>
    //   </Box>
    // </div>
    <div className="question-form-container">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          p: 3,
          m: 2,
          border: "1px solid #ddd",
          borderRadius: 1,
          boxShadow: 1,
          minWidth: "80%",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Submit a Question
        </Typography>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid item xs={12}>
            <TextField
              label="WhatsApp Number"
              variant="outlined"
              name="phone_number"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Question"
              variant="outlined"
              name="question"
              required
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <div className="question-form-attachments">
              <label htmlFor="attachments">
                <Input
                  id="attachments"
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <Button variant="contained" component="span">
                  Upload Attachments
                </Button>
              </label>
              {files.length > 0 && (
                <List>
                  {files.map((file, index) => (
                    <ListItem
                      key={index}
                      secondaryAction={
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => handleFileRemove(index)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      }
                    >
                      <ListItemText primary={file.name} />
                    </ListItem>
                  ))}
                </List>
              )}
            </div>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default QuestionForm;
