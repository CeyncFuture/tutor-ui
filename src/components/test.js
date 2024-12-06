/**
 * author Thilina Pahalagedara
 * created on 04-08-2024-13h-41m
 * github: https://github.com/Pahalagedara
 * copyright 2024
*/
import React from 'react';
import { Container } from '@mui/material';

const testComponent = () => {
    return (
        <div className='test-container'>
            <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center' }}>
                <div>&copy; copyright <a href='https://ceyncfuture.live'>ceyncfuture</a></div>
            </Container>
        </div>
    );
}

export default testComponent;