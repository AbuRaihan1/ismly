import {
  Box,
  Container,
  FilledInput,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
// import Select from '@mui/joy/Select';

import defaultStudent from "../../../../../src/assets/images/defaultStudent.jpg";
import "../../teacher/CreateTeacher/CreateTeacher.css";
import UpdateSetting from "../../updateSetting/UpdateSetting";
const CreateStudent = () => {
  const [gender, setGender] = useState<string>("male");

  return (
    <>
      <Container className="add_teacher_wrapper">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="add_teacher_info">
              <img src={defaultStudent} alt="" />
              {/* <button>Edit</button> */}
              <div className="teachers_data_inputs">
                <Box className="input_wrapper">
                  <TextField
                    className="input"
                    sx={{ width: "90%" }}
                    size="small"
                    id="outlined-basic"
                    label="First name"
                    variant="outlined"
                  />
                  <TextField
                    className="input"
                    sx={{ width: "90%" }}
                    size="small"
                    id="outlined-basic"
                    label="Last name"
                    variant="outlined"
                  />
                  <TextField
                    className="input"
                    sx={{ width: "90%" }}
                    size="small"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                  <TextField
                    className="input"
                    sx={{ width: "90%" }}
                    size="small"
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined"
                  />
                  <TextField
                    className="input"
                    sx={{ width: "90%" }}
                    size="small"
                    id="outlined-basic"
                    label="Student Id"
                    variant="outlined"
                  />
                  <Box>
                    <Select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      sx={{ width: "90%" }}
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </Box>
                  <br />
                  <FilledInput />
                </Box>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <UpdateSetting />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CreateStudent;
