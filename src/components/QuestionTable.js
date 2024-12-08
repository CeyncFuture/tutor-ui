import React, {useEffect, useState} from 'react';
import {
    TableCell,
    TableRow
} from '@mui/material';
import CustomTable from "./CustomTable";
import {useDispatch, useSelector} from "react-redux";
import questionActions from "../actions/question";
import Loader from "./circularProgress";
import {GET_QUESTIONS_END} from "../actions/constants/question";
import Button from "@mui/material/Button";
import { Visibility} from "@mui/icons-material";
import {get} from "lodash";

const headers = [
    "Question",
    "Whatsapp Number",
    "Attachment"
]

const QuestionTable = () => {
    const [page, setPage] = useState(0);
    const isFetching = useSelector((state) => state.question.isLoading);
    const questions = useSelector((state) => state.question.questions);
    const error = useSelector((state) => state.question.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: GET_QUESTIONS_END})
        dispatch(questionActions.getQuestions(page));
    }, [page])

    const headerRow = headers.map((header, index) => (
        <TableCell key={index} align="center">{header}</TableCell>
    ))

    const dataRows = questions?.map((question, index) =>
        <TableRow
            key={index}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            <TableCell>{question?.question}</TableCell>
            <TableCell align="center">{question?.phone_number}</TableCell>
            <TableCell align="center">
                <Button
                    startIcon={<Visibility/>}
                    variant="outlined"
                    onClick={() => {
                        window.open(
                            get(question, "question_attachments[0].file_path"),
                            "_blank",
                            "noopener,noreferrer"
                        );
                    }}
                >
                    View
                </Button>
            </TableCell>
        </TableRow>
    ) || []

    return isFetching ?
        <Loader/> :
        <CustomTable headerRow={headerRow} dataRows={dataRows} page={page} setPage={setPage} totalElements={questions?.length || 0}/>;
};

export default QuestionTable;
