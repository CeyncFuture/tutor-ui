import * as React from 'react';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import {Edit} from "@mui/icons-material";
import defaultProfilePic from "../assets/profilePictures/1.png"

export default function ProfileCard(props) {
    const {data, isEditable, setIsEdit} = props;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                bgcolor: 'white',
                minHeight: '90vh',
                padding: 3
            }}
        >
            <Avatar alt={data?.first_name} src={data?.profile_picture || defaultProfilePic} sx={{width: 250, height: 250}}/>
            <Typography component="h1" variant="h5" sx={{mt: 3}}>
                {`${data?.first_name} ${data?.last_name}`}
            </Typography>
            <Typography sx={{color: 'rgb(80, 87, 89)', fontSize: '14px'}}>
                {data?.email}
            </Typography>
            <Typography sx={{color: 'rgb(80, 87, 89)', fontSize: '14px'}}>
                {data?.phone_number}
            </Typography>
            <Stack sx={{mt: 3}} direction="row" flexWrap="wrap" spacing={1}>
                {
                    data?.interests?.map((area, index) => (
                        <Chip key={index} label={area} color="primary"/>
                    ))
                }
            </Stack>
            {
                isEditable &&
                <Button
                    startIcon={<Edit/>}
                    variant="outlined"
                    sx={{mt: 3, mb: 2}}
                    onClick={() => {
                        setIsEdit(true)
                    }}
                >
                    Edit Profile
                </Button>
            }
        </Box>
    );
}
