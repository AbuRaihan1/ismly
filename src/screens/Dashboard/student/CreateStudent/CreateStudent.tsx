import { Box, Container, Grid, TextField } from "@mui/material";
import defaultTeacherImg from "../../../../../src/assets/images/defaultTeacher.png";
import "../../teacher/CreateTeacher/CreateTeacher.css";
import UpdateSetting from "../../updateSetting/UpdateSetting";
const CreateStudent = () => {
  return (
    <>
      <Container className="add_teacher_wrapper">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="add_teacher_info">
              <img src={defaultTeacherImg} alt="" />
              <button>Edit</button>
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
