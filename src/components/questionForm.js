import React, { useState } from 'react';
import { TextField, Button, Box, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import fetch from '../utils/apiService';

const Input = styled('input')({
  display: 'none',
});

const QuestionForm = () => {
  const [files, setFiles] = useState([]);


  const handleFileChange = (e) => {
    setFiles(prevFiles => [...prevFiles, ...Array.from(e.target.files)]);
  };

  const handleFileRemove = (index) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    files.forEach((file)=>{
      formData.append('attachments', file);
    })

    fetch('/question', {
      method: 'POST',
      body: formData,
      headers:{
        contentType: 'multipart/form-data',
        accept: 'multipart/form-data',
      }
    })
      .then(response => {
        if (response.data){
          console.log('Success:', response.data);
        } else {
          console.error('Error:', response.error);
        }
      })
  };

  return (
    <div className="question-form-container">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-around',
          p: 2,
          m: 2,
          border: '1px solid #ddd',
          borderRadius: 1,
          boxShadow: 1,
          padding: '2vh 10vw',
          minHeight: '500px'
        }}
      >

        <Typography variant="h5" component="h1" gutterBottom>
          Submit a Question
        </Typography>
          <TextField
              label="Whatsapp Number"
              variant="outlined"
              name="phone_number"
              required
              fullWidth
              sx={{ mb: 2 }}
          />
        <TextField
          label="Question"
          variant="outlined"
          name="question"
          required
          fullWidth
          multiline
          rows={5}
          sx={{ mb: 2 }}
        />
        <div className="question-form-attachments">
          <label htmlFor="attachments">
            <Input
              id="attachments"
              type="file"
              multiple
              onChange={handleFileChange}
            />
            <Button
              variant="contained"
              component="span"
              sx={{ mb: 2 }}
            >
              Upload Attachments
            </Button>
          </label>
          {files.length > 0 && (
            <List sx={{ mb: 2 }}>
              {files.map((file, index) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => handleFileRemove(index)}>
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default QuestionForm;
