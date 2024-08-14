import * as React from 'react';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import {Edit} from "@mui/icons-material";

export default function ProfileCard(props) {
    const {data, isEditDisabled, setIsEdit} = props;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                bgcolor: 'white',
                padding: 3
            }}
        >
            <Avatar alt={data?.firstName} src={data?.prfImgUrl} sx={{width: 250, height: 250}}/>
            <Typography component="h1" variant="h5" sx={{mt: 3}}>
                {`${data?.firstName} ${data?.lastName}`}
            </Typography>
            <Stack sx={{mt: 3}} direction="row" spacing={1}>
                {
                    data?.interestAreas?.map((area, index) => (
                        <Chip key={index} label={area} color="primary"/>
                    ))
                }
            </Stack>
            {
                !isEditDisabled &&
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
