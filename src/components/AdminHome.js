import React, {useState} from 'react';
import {
    Container,
    Box,
    Tab,
    Tabs
} from '@mui/material';
import QuestionTable from "./QuestionTable";
import TutorTable from "./TutorTable";

const AdminHome = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (e, activeTab) => {
        setActiveTab(activeTab);
    }

    return (
        <Container component="main" maxWidth="lg" sx={{p: 5}}>
            <Box sx={{bgcolor: 'white', padding: 3}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={activeTab} onChange={handleChange}>
                        <Tab label="Questions"/>
                        <Tab label="Tutors"/>
                    </Tabs>
                </Box>
                {activeTab === 0 && <QuestionTable/>}
                {activeTab === 1 && <TutorTable/>}
            </Box>
        </Container>
    );
};

export default AdminHome;
