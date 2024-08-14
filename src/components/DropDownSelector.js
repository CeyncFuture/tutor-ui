import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {FormLabel} from "@mui/material";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from '@mui/material/Chip';

export default function DropDownSelector({label, items}) {
    const [values, setValues] = React.useState([]);

    const onCheckboxClicked = (e) => {
        let temp = [];

        if (e.target.checked) {
            if(e.target.value === 'all') {
                items?.map(item => temp.push(item));
            } else {
                temp = temp.concat(values);
                temp.push(e.target.value);
            }
        } else {
            if(e.target.value !== 'all') {
                temp = temp.concat(values);
                let index = temp.indexOf(e.target.value);
                temp.splice(index, 1);
            }
        }

        setValues(temp);
    }

    const handleDelete = (item) => {
        let temp = [];
        temp = temp.concat(values);
        let index = temp.indexOf(item);
        temp.splice(index, 1);
        setValues(temp);
    }

    return (
        <FormGroup>
            <FormLabel sx={{mb: 2}}>{label}</FormLabel>
            <Stack direction="row" spacing={1} flexWrap='wrap' sx={{mb:2}}>
                {
                    values?.map((item, index) => (
                        <Chip key={index} label={item} onDelete={()=>handleDelete(item)} />
                    ))
                }
            </Stack>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <Checkbox
                    value='all'
                    onClick={onCheckboxClicked}
                    checked={values.length === items?.length}
                    sx={{
                        marginLeft: 2
                    }}
                />
                <Typography>Select All</Typography>
            </Box>
            <Divider/>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '150px',
                    overflowY: 'scroll'
                }}
            >
                {
                    items.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <Checkbox
                                name={item}
                                value={item}
                                onClick={onCheckboxClicked}
                                checked={values.includes(item)}
                                sx={{
                                    marginLeft: 2
                                }}
                            />
                            <Typography>{item}</Typography>
                        </Box>
                    ))
                }
            </Box>
        </FormGroup>
    );
}
