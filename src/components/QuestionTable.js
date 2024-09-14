import React from 'react';
import {
    TableCell,
    TableRow
} from '@mui/material';
import {questions} from "../utils/constants";
import CustomTable from "./CustomTable";

const headers = [
    "Question",
    "Whatsapp Number",
    "Attachment"
]

const QuestionTable = () => {
    const headerRow = headers.map((header, index) => (
        <TableCell key={index} align="center">{header}</TableCell>
    ))

    const dataRows = questions.map((question, index) =>
        <TableRow
            key={index}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            <TableCell align="center">{question.name}</TableCell>
            <TableCell align="center">{question.whatsappNo}</TableCell>
            <TableCell align="center">{question.attachment.fileName}</TableCell>
        </TableRow>
    )

    return <CustomTable headerRow={headerRow} dataRows={dataRows} totalElements={225}/>;
};

export default QuestionTable;
