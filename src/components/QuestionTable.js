import React, {useEffect, useState} from 'react';
import {
    TableCell,
    TableRow
} from '@mui/material';
import CustomTable from "./CustomTable";
import {useDispatch, useSelector} from "react-redux";
import adminActions from "../actions/admin";
import {questions} from "../utils/constants";
import Loader from "./circularProgress";

const headers = [
    "Question",
    "Whatsapp Number",
    "Attachment"
]

const QuestionTable = () => {
    const [page, setPage] = useState(1);
    const admin = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(adminActions.showLoader(true));
        dispatch(adminActions.getQuestions(page));
    }, [page])

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
    ) || []

    return admin.isLoading ?
        <Loader/> :
        <CustomTable headerRow={headerRow} dataRows={dataRows} page={page} setPage={setPage} totalElements={admin?.questions?.length || 0}/>;
};

export default QuestionTable;
