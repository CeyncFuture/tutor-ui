import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DropDownSelector from "./DropDownSelector";
import {interests} from "../utils/constants";
import {useDispatch} from "react-redux";
import userActions from "../actions/user";
import {useState} from "react";

export default function EditProfile({setIsEdit, user}) {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState(user);

    const onChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(userActions.updateUserProfile(userData));
    };

    return (
        <Box sx={{mt: 3, bgcolor: 'white', padding: 3}}>
            <Grid container spacing={2}>
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
                    <DropDownSelector
                        label="Interests"
                        name="interests"
                        interests={userData.interests}
                        items={interests}
                        onChange={onChange}
                    />
                </Grid>
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
