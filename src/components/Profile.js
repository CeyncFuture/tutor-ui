import * as React from 'react';
import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router";
import Container from '@mui/material/Container';
import EditProfile from "./EditProfile";
import ProfileCard from "./ProfileCard";

export default function Profile() {
    const [isEdit, setIsEdit] = useState(false);
    const [data, setData] = useState({
        firstName: "Ovindu",
        lastName: "Nambukara",
        phoneNumber: "0776213875",
        email: "ovindunambukara@gmail.com",
        prfImgUrl: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
        interestAreas: [
            "Machine Learning",
            "Quality Assurance",
            "Software Development",
            "SPA"
        ]
    });

    const {tutorId} = useParams();
    const {state} = useLocation();
    const {isEditDisabled} = state;

    useEffect(() => {
        if (tutorId) {
            //TODO:If tutor ID is not null then Fetch Data for the tutor based on the tutorId
        }
    }, [tutorId]);

    return (
        <Container component="main" maxWidth='sm' sx={{p: 5}}>
            {
                isEdit ?
                    <EditProfile setIsEdit={setIsEdit}/>
                    :
                    <ProfileCard
                        data={data}
                        isEditDisabled={isEditDisabled}
                        setIsEdit={setIsEdit}
                    />
            }
        </Container>
    );
}
