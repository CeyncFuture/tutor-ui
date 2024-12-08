import React, {useEffect, useState} from 'react';
import {
    TableCell,
    TableRow
} from '@mui/material';
import CustomTable from "./CustomTable";
import {useDispatch, useSelector} from "react-redux";
import adminActions from "../actions/admin";
import Loader from "./circularProgress";
import {tutors} from "../utils/constants";

const headers = [
    "Name",
    "Email Address",
    "Phone Number",
    "Interest Areas"
]

const TutorTable = () => {
    const [page, setPage] = useState(1);
    const admin = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(adminActions.showLoader(true));
        dispatch(adminActions.getTutors(page));
    }, [page])

    const headerRow = headers.map((header, index) =>
        <TableCell key={index} align="center">{header}</TableCell>
    )

    const dataRows = tutors.map((tutor, index) =>
        <TableRow
            key={index}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            <TableCell align="center">{`${tutor.firstName} ${tutor.lastName}`}</TableCell>
            <TableCell align="center">{tutor.email}</TableCell>
            <TableCell align="center">{tutor.phoneNumber}</TableCell>
            <TableCell align="center">{tutor.interestAreas.join(",")}</TableCell>
        </TableRow>
    ) || []

    return admin.isLoading ?
        <Loader/>:
        <CustomTable headerRow={headerRow} dataRows={dataRows} page={page} setPage={setPage} totalElements={admin?.questions?.length || 0}/>;
};

export default TutorTable;
