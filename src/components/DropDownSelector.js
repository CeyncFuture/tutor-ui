import * as React from 'react';
import {useEffect, useState} from "react";
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {FormLabel} from "@mui/material";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from '@mui/material/Chip';
import {getSubjectById} from "../utils/utils";

export default function DropDownSelector({label, name, items, onChange, interests = []}) {
  const [subjectIds, setSubjectIds] = useState(interests);
  const [isAllChecked, setIsAllChecked] = useState(false);

  useEffect(() => {
    console.log(subjectIds)
    onChange({
            target: {
                name: name,
                value: subjectIds
            }
        })
    }, [subjectIds]);

    const onCheckboxClicked = (e) => {
        let tempIds = []

        if (e.target.checked) {
            if (e.target.value === 'all') {
              setIsAllChecked(!isAllChecked)
              items.categories.map((item) => {
                  item.subjects.map((subject) => {
                    tempIds.push(subject.id)
                  })
                });
            } else {
              tempIds = tempIds.concat(subjectIds);
              tempIds.push(parseInt(e.target.name));
            }
        } else {
            if (e.target.value !== 'all') {
              tempIds = tempIds.concat(subjectIds);
                let id = tempIds.indexOf(parseInt(e.target.name));
              tempIds.splice(id, 1);
            }
          setIsAllChecked(!isAllChecked)
        }
        setSubjectIds(tempIds);
    }

    const handleDelete = (item) => {
        let temp = [];
        temp = temp.concat(subjectIds);
        let index = temp.indexOf(item);
        temp.splice(index, 1);
        setSubjectIds(temp);
    }

    return (
        <FormGroup>
            <FormLabel sx={{mb: 2}}>{label}</FormLabel>
            <Stack direction="row" spacing={1} flexWrap='wrap' sx={{mb: 2}}>
                {
                  subjectIds?.map((subject, index) => {
                    const subjectDetails = getSubjectById(items.categories, subject);
                    return (<Chip key={index} sx={{marginBottom: '5px'}} label={subjectDetails.name} onDelete={() => handleDelete(subject)}/>)
                  })
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
                    checked={isAllChecked}
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
                    items.categories.map((item, index) => (
                        <Box
                            key={item.id}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: ' flex-start',
                                background: "#f5f5f5",
                                marginBottom: "10px",
                                padding: "5px",
                                borderRadius: "5px"
                            }}
                        >
                          <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: ' center'
                          }}>
                           {/* <Checkbox
                              name={item.name}
                              value={item.name}
                              onClick={onCheckboxClicked}
                              checked={values.includes(item.name)}
                              sx={{
                                marginLeft: 2
                              }}
                            />*/}
                            <Typography sx={{margin: "10px 0"}}>{item.name}</Typography>
                          </div>

                          <div style={{marginLeft: '10px'}}>
                            {
                              item.subjects.map((item, index) => (
                                <Box
                                  key={item.id}
                                  sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: ' flex-start'
                                  }}
                                >
                                  <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: ' center'
                                  }}>
                                  <Checkbox
                                    name={item.id}
                                    value={item.name}
                                    onClick={onCheckboxClicked}
                                    checked={subjectIds.includes(item.id)}
                                    sx={{
                                      marginLeft: 2
                                    }}
                                  />
                                  <Typography>{item.name}</Typography>
                                  </div>
                                </Box>
                              ))
                            }
                          </div>
                        </Box>
                    ))
                }
            </Box>
        </FormGroup>
    );
}
