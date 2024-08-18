import * as React from 'react';
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import Container from '@mui/material/Container';
import EditProfile from "./EditProfile";
import ProfileCard from "./ProfileCard";
import {useDispatch, useSelector} from "react-redux";
import userActions from "../actions/user";

export default function Profile({isEditable}) {
    const [isEdit, setIsEdit] = useState(false);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const {tutorId} = useParams();

    useEffect(() => {
        if (tutorId !== undefined) {
            console.log(tutorId)
            dispatch(userActions.getUserById(tutorId));
        }
    }, []);

    return (
        <Container component="main" maxWidth='sm' sx={{p: 5}}>
            {
                isEdit ?
                    <EditProfile setIsEdit={setIsEdit} user={user}/>
                    :
                    <ProfileCard
                        data={user}
                        isEditable={isEditable}
                        setIsEdit={setIsEdit}
                    />
            }
        </Container>
    );
}
