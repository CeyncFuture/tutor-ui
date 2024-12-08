import React, {useEffect, useState} from 'react';
import {
    TableCell,
    TableRow
} from '@mui/material';
import CustomTable from "./CustomTable";
import {useDispatch, useSelector} from "react-redux";
import adminActions from "../actions/admin";
import Loader from "./circularProgress";

const headers = [
    "Question",
    "Whatsapp Number",
    "Attachment"
]

const QuestionTable = () => {
    const [page, setPage] = useState(0);
    const isFetching = useSelector((state) => state.admin.isLoading);
    const questions = useSelector((state) => state.admin.questions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(adminActions.showLoader(true));
        dispatch(adminActions.getQuestions(page));
    }, [page])

    const headerRow = headers.map((header, index) => (
        <TableCell key={index} align="center">{header}</TableCell>
    ))

    const dataRows = questions?.map((question, index) =>
        <TableRow
            key={index}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            <TableCell align="center">{question?.question}</TableCell>
            <TableCell align="center">{question?.phone_number}</TableCell>
            <TableCell align="center">
                <a href={question?.question_attachments[0].file_path}>
                    {question?.question_attachments[0].file_path}
                </a>
            </TableCell>
        </TableRow>
    ) || []

    return isFetching ?
        <Loader/> :
        <CustomTable headerRow={headerRow} dataRows={dataRows} page={page} setPage={setPage} totalElements={questions?.length || 0}/>;
};

export default QuestionTable;
