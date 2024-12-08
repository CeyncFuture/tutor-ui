import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import DropDownSelector from "./DropDownSelector";
import {useDispatch, useSelector} from "react-redux";
import userActions from "../actions/user";
import {useState} from "react";

export default function EditProfile({setIsEdit, user}) {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState(user);
    const [selectedImage, setSelectedImage] = useState(user.profile_picture || 1);
    const [updatedData, setUpdatedData] = useState({});
    const subjects = useSelector((state) => state.common.subjects);

    const onChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value});
        setUpdatedData({...updatedData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updatedData.profile_picture = selectedImage.toString();
        dispatch(userActions.updateUserProfile(updatedData, true));
    };

    const handleImageClick = (imageId) => {
        setSelectedImage(imageId);
    };

    return (
        <Box sx={{mt: 3, bgcolor: 'white', padding: 3}}>
            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={12} style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
                    {selectedImage && (
                            <Avatar alt="Selected Profile" src={require(`../assets/profilePictures/${selectedImage}.png`)} style={{ width: 100, height: 100 }} />
                    )}
                    {[...Array(4)].map((_, i) => (
                        <Avatar
                            key={i}
                            alt={`Profile ${i}`}
                            src={require(`../assets/profilePictures/${i+1}.png`)}
                            onClick={() => handleImageClick(i+1)}
                            style = {selectedImage === i+1 ? { cursor: 'pointer', margin: '10px', width: 50, height: 50, border: "solid 2px blue" } : { cursor: 'pointer', margin: '10px', width: 50, height: 50, }}
                        />
                    ))}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="First Name"
                        name="first_name"
                        id="firstName"
                        value={userData.first_name}
                        required
                        fullWidth
                        autoFocus
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Last Name"
                        name="last_name"
                        id="lastName"
                        value={userData.last_name}
                        required
                        fullWidth
                        autoFocus
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Email Address"
                        name="email"
                        id="email"
                        value={userData.email}
                        required
                        fullWidth
                        autoFocus
                        onChange={onChange}
                        disabled
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Phone Number"
                        name="phone_number"
                        id="phoneNumber"
                        value={userData.phone_number}
                        required
                        fullWidth
                        autoFocus
                        onChange={onChange}
                    />
                </Grid>
                {/*<Grid item xs={12}>
                    <TextField
                        type="password"
                        label="Password"
                        name="password"
                        id="password"
                        required
                        fullWidth
                        onChange={onChange}
                    />
                </Grid>*/}
                <Grid item xs={12}>
                    <TextField
                        label="Description"
                        name="description"
                        id="description"
                        required
                        fullWidth
                        multiline
                        rows={4}
                        inputProps={{ maxLength: 200 }}
                        value={userData.description}
                        autoFocus
                        onChange={onChange}
                    />
                </Grid>
                {/* <Grid item xs={12}>
                    <DropDownSelector
                        label="Interests"
                        name="interests"
                        interests={userData.interests}
                        items={subjects}
                        onChange={onChange}
                    />
                </Grid> */}
            </Grid>
            <Button fullWidth variant="contained" sx={{mt: 3, mb: 2}} onClick={handleSubmit}>
                Save
            </Button>
            <Button fullWidth variant="contained" sx={{mb: 2}} onClick={() => setIsEdit(false)}>
                Cancel
            </Button>
        </Box>
    );
}
