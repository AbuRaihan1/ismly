import {
  Box,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
// import Select from '@mui/joy/Select';

import defaultStudent from "../../../../../src/assets/images/defaultStudent.jpg";
import UpdateSetting from "../../updateSetting/UpdateSetting";
// import "../CreateTeacher/CreateTeacher.css";
import "../CreateSomething.css";
const CreateStudent = () => {
  const [gender, setGender] = useState<string>("male");

  return (
    <>
      <Container className="add_teacher_wrapper">
        <Grid container spacing={2}>
          <Grid item md={8} sm={12}>
            <div className="add_teacher_info">
              <img src={defaultStudent} alt="" />
              {/* <button>Edit</button> */}
              <div className="teachers_data_inputs">
                <Box className="input_wrapper">
                  <TextField
                    className="input"
                    sx={{ width: "100%" }}
                    size="small"
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                  />

                  <TextField
                    className="input"
                    sx={{ width: "100%" }}
                    size="small"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                  <TextField
                    className="input"
                    sx={{ width: "100%" }}
                    size="small"
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined"
                  />

                  <Box>
                    <Select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      sx={{ width: "100%" }}
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </Box>
                  <br />
                  <textarea placeholder="Hometown"></textarea>
                  <textarea placeholder="Allergies"></textarea>
                </Box>
              </div>
            </div>
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <UpdateSetting
              data={[
                {
                  text: "Add Teacher",
                  onPress: () => {
                    alert("add teacher clicked");
                  },
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CreateStudent;
