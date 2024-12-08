import * as React from 'react';
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import Container from '@mui/material/Container';
import EditProfile from "./EditProfile";
import ProfileCard from "./ProfileCard";
import {useDispatch, useSelector} from "react-redux";
import instructorActions from "../actions/instructor";

export default function Profile({isEditable}) {
    const [isEdit, setIsEdit] = useState(false);
    const user = useSelector((state) => state.user);
    const instructor = useSelector((state) => state.instructor);
    const dispatch = useDispatch();

    const {tutorId} = useParams();

    useEffect(() => {
        if (tutorId !== undefined) {
            dispatch(instructorActions.getInstructorById(tutorId));
        }
    }, []);

    return (
        <Container className="profile-container" component="main" maxWidth='sm' sx={{p: 5}}>
            {
                isEdit ?
                    <EditProfile setIsEdit={setIsEdit} user={user}/>
                    :
                    <ProfileCard
                        data={tutorId !== undefined ? instructor : user}
                        isEditable={isEditable}
                        setIsEdit={setIsEdit}
                        isSharedProfile={tutorId !== undefined}
                    />
            }
        </Container>
    );
}
