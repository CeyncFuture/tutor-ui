import * as React from 'react';
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import Container from '@mui/material/Container';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageIcon from '@mui/icons-material/Image';
import Button from "@mui/material/Button";
import {Edit} from "@mui/icons-material";

export default function TutorProfile() {
    const {tutorId} = useParams();
    const [data, setData] = useState({
        prfImgUrl: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
        name: "Ovindu Arachana Nambukara",
        interestAreas: [
            "Machine Learning",
            "Quality Assurance",
            "Software Development",
            "SPA"
        ]
    });

    useEffect(() => {
    }, [])

    return (
        <Container component="main" sx={{pt:5}}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        flex: 0.5,
                        bgcolor: 'white',
                        padding: 3,
                    }}
                >
                    <Avatar alt={data?.name} src={data?.prfImgUrl} sx={{width: 250, height: 250}}/>
                    <Typography component="h1" variant="h5" sx={{mt: 3}}>
                        {data?.name}
                    </Typography>
                    <Button startIcon={<Edit/>} variant="contained" sx={{mt: 3, mb: 2}}>
                        Edit Profile
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 0.5,
                        bgcolor: '#ebe8e8',
                        padding: 3
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Interest Areas
                    </Typography>
                    <List>
                        {
                            data?.interestAreas.map((area, index) => (
                                <ListItem key={{index}}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <ImageIcon/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={area}/>
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
            </Box>
        </Container>
    );
}
