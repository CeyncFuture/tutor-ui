import * as React from 'react';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import {Edit} from "@mui/icons-material";
import {useSelector} from "react-redux";
import { get } from "lodash";
import {createNotification, getSubjectById} from "../utils/utils";
import Loader from "./circularProgress";

export default function ProfileCard(props) {
  const {data, isEditable, setIsEdit, isSharedProfile} = props;
  const subjects = useSelector((state) => state.common.subjects);

  let profile_picture = get(data, 'profile_picture', 1);
  profile_picture = profile_picture === null ? 1 : profile_picture;

    const sharableLink = `${window.location.origin}/tutor/${get(data, 'sharable_id')}`;

  if (get(data, 'isLoading')){
    return <Loader/>;
  }

  const handleCopy = () => {
      const tempTextarea = document.createElement("textarea");
      tempTextarea.value = sharableLink;

      document.body.appendChild(tempTextarea);

      tempTextarea.select();
      document.execCommand("copy");

      document.body.removeChild(tempTextarea);

      createNotification("success", "Link copied to clipboard!");
  }

  return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                bgcolor: 'white',
                minHeight: '60vh',
                padding: 3,
              boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)'
            }}
        >
            <Avatar
                alt={data?.first_name}
                src={require(`../assets/profilePictures/${profile_picture}.png`)}
                sx={{width: 250, height: 250}}/>
            <Typography component="h1" variant="h5" sx={{mt: 3}}>
                {`${data?.first_name} ${data?.last_name}`}
            </Typography>
            <Typography sx={{color: 'rgb(80, 87, 89)', fontSize: '14px'}}>
                {data?.email}
            </Typography>
            {
                !isSharedProfile &&
                <Typography sx={{color: 'rgb(80, 87, 89)', fontSize: '14px'}}>
                    {data?.phone_number}
                </Typography>
            }
            <Typography sx={{color: 'rgb(80, 87, 89)', fontSize: '14px', mt: 3, padding: "0px 10px"}}>
                {data?.description}
            </Typography>
            <Stack sx={{mt: 2}} direction="row" flexWrap="wrap" justifyContent={"center"} spacing={1}>
                {
                    data?.interests?.map((subject, index) => {
                      const subjectDetails = getSubjectById(subjects.categories, subject);
                      return (< Chip key = {index} label = {subjectDetails.name} color = "primary" className="mui-custom-chip"/>)
                     })
                }
            </Stack>
            {
                isEditable &&
                <Button
                    startIcon={<Edit/>}
                    variant="outlined"
                    sx={{mt: 3, mb: 2}}
                    onClick={() => {
                        setIsEdit(true)
                    }}
                >
                    Edit Profile
                </Button>
            }
            {!isSharedProfile &&
                <Button
                    variant="outlined"
                    sx={{mt: 3, mb: 2}}
                    onClick={handleCopy}
                >
                    Copy Profile Link
                </Button>
            }
        </Box>
  )
      ;
}
