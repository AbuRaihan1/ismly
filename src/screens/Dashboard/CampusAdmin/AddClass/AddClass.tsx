import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import UpdateSetting from "../../updateSetting/UpdateSetting";
import defaultStudent from "../../../../../src/assets/images/defaultStudent.jpg";
import "../CreateSomething.css";
const AddClass = () => {
  const [gender, setGender] = useState<string>("2021-2022");
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
                  <Box>
                    <Select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      sx={{ width: "100%" }}
                    >
                      <MenuItem value="2021-2022">2021-2022</MenuItem>
                      <MenuItem value="2022-2023">2022-2023</MenuItem>
                    </Select>
                  </Box>
                   
                  <TextField
                    className="input"
                    sx={{ width: "100%", marginTop : "10px" }}
                    size="small"
                    id="outlined-basic"
                    label="Class Name"
                    variant="outlined"
                  />
                </Box>
                 <div><b>School Name : </b> Ismly</div>
              </div>
            </div>
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <UpdateSetting />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AddClass;
