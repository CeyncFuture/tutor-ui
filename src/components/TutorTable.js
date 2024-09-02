import React from 'react';
import {
    TableCell,
    TableRow
} from '@mui/material';
import {tutors} from "../utils/constants";
import CustomTable from "./CustomTable";

const headers = [
    "Name",
    "Email Address",
    "Phone Number",
    "Interest Areas"
]

const TutorTable = () => {
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
    )

    return <CustomTable headerRow={headerRow} dataRows={dataRows} totalElements={225}/>;
};

export default TutorTable;
