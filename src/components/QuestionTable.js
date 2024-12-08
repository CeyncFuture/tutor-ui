import React, {useEffect, useState} from 'react';
import {
    TableCell,
    TableRow
} from '@mui/material';
import CustomTable from "./CustomTable";
import {useDispatch, useSelector} from "react-redux";
import questionActions from "../actions/question";
import Button from "@mui/material/Button";
import { Visibility} from "@mui/icons-material";
import {get} from "lodash";

const headers = [
    "Question",
    "Whatsapp Number",
    "Attachment"
]

const QuestionTable = () => {
    const [page, setPage] = useState(1);
    const questions = useSelector((state) => state.question.questions);
    const totalElements = useSelector((state) => state.question.totalElements);
    const dispatch = useDispatch();

    useEffect(() => {
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

    return <CustomTable headerRow={headerRow} dataRows={dataRows} page={page} setPage={setPage} totalElements={totalElements}/>;
};

export default QuestionTable;
