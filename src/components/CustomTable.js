import React from 'react';
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    Box
} from '@mui/material';
import PaginationBar from "./PaginationBar";

const CustomTable = ({headerRow, dataRows, page, setPage, totalElements}) => {
    const handleChange = (e, value) => {
        setPage(value);
    }

    return (
        <Box sx={{marginTop: "30px"}}>
            <Table sx={{marginBottom: "30px", border: '1px solid #E0E0E0'}}>
                <TableHead sx={{backgroundColor: '#E0E0E0'}}>
                    <TableRow>
                        {headerRow}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataRows}
                </TableBody>
            </Table>
            {
                totalElements > 20 &&
                <PaginationBar
                    totalElements={totalElements}
                    page={page}
                    onChange={handleChange}
                />
            }
        </Box>
    );
};

export default CustomTable;
