import React, {useState} from 'react';
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    Box
} from '@mui/material';
import PaginationBar from "./PaginationBar";

const CustomTable = ({headerRow, dataRows, totalElements}) => {
    const [page, setPage] = useState(1);

    const handleChange = (e, value) => {
        setPage(value);
    }

    return (
        <Box>
            <Table>
                <TableHead>
                    <TableRow>
                        {headerRow}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataRows}
                </TableBody>
            </Table>
            <PaginationBar
                totalElements={totalElements}
                page={page}
                onChange={handleChange}
            />
        </Box>
    );
};

export default CustomTable;
