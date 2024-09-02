import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationBar = ({totalElements, page, onChange}) => {
    return (
        <Stack spacing={2} alignItems="center">
            <Pagination
                page={page}
                onChange={onChange}
                count={Math.ceil(totalElements / 20)}
                variant="outlined"
                shape="rounded"
            />
        </Stack>
    );
}

export default PaginationBar;