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

export default function EditProfile({setIsEdit}) {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({});

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(userActions.updateUserProfile(formData));
    };

    return (
        <Box sx={{mt: 3, bgcolor: 'white', padding: 3}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="First Name"
                        name="firstName"
                        id="firstName"
                        required
                        fullWidth
                        autoFocus
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Last Name"
                        name="lastName"
                        id="lastName"
                        required
                        fullWidth
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Email Address"
                        name="email"
                        id="email"
                        required
                        fullWidth
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Phone Number"
                        name="phoneNumber"
                        id="phoneNumber"
                        required
                        fullWidth
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        type="password"
                        label="Password"
                        name="password"
                        id="password"
                        required
                        fullWidth
                        onChange={onChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <DropDownSelector
                        label="Interests"
                        name="interests"
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
