import React, {useEffect, useState} from 'react';
import {
    TableCell,
    TableRow
} from '@mui/material';
import CustomTable from "./CustomTable";
import {useDispatch, useSelector} from "react-redux";
import Loader from "./circularProgress";
import {useNavigate} from "react-router";
import tutorActions from "../actions/tutor";
import Chip from "@mui/material/Chip";
import {get} from "lodash";

const headers = [
    "Name",
    "Phone Number",
    "Subjects"
]

const TutorTable = () => {
    const [page, setPage] = useState(0);
    const isFetching = useSelector((state) => state.tutor.isLoading);
    const tutors = useSelector((state) => state.tutor.tutors);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(tutorActions.getTutors(page));
    }, [page])

    const headerRow = headers.map((header, index) =>
        <TableCell key={index} align="center">{header}</TableCell>
    )

    const dataRows = tutors?.map((tutor, index) => {
        const subjects = tutor?.subjects.map(subject =>  {
            return <Chip key = {index} label = {subject.name} color = "primary" className="mui-custom-chip"/>
        });

        const sharableLink = `${window.location.origin}/tutor/${get(tutor, 'user.sharable_id')}`;

        return (
            <TableRow
                key={index}
                sx={{'&:last-child td, &:last-child th': {border: 0}, cursor: 'pointer'}}
                onClick={() => {
                    window.open(sharableLink, "_blank", "noopener,noreferrer"
                    );
                }}
            >
                <TableCell>{`${tutor.user.first_name} ${tutor.user.last_name}`}</TableCell>
                <TableCell align="center">{tutor.user.phone_number}</TableCell>
                <TableCell align="center">{subjects}</TableCell>
            </TableRow>
        )
    }) || []

    return isFetching ?
        <Loader/>:
        <CustomTable headerRow={headerRow} dataRows={dataRows} page={page} setPage={setPage} totalElements={tutors?.length || 0}/>;
};

export default TutorTable;
