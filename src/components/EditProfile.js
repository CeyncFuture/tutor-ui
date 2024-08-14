import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DropDownSelector from "./DropDownSelector";
import {interests} from "../utils/constants";

export default function EditProfile({setIsEdit}) {
    return (
        <Box
            component="form"
            noValidate
            sx={{
                mt: 3,
                bgcolor: 'white',
                padding: 3
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <DropDownSelector
                        label="Interests"
                        items={interests}
                    />
                </Grid>
            </Grid>
            <Button
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
            >
                Save
            </Button>
            <Button
                fullWidth
                variant="contained"
                sx={{mb: 2}}
                onClick={() => setIsEdit(false)}
            >
                Cancel
            </Button>
        </Box>
    );
}
