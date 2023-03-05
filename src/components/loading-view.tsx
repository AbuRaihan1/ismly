import {
  Avatar,
  Box,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";
import Constants from "../utiils/Constants";

export default function LoadingView() {
  return (
    <Box
      sx={{
        backgroundColor: Constants.colors.halfTransparentBlack,
        display: "flex",
        width: "100vw",
        height: "100vh",
        position: "absolute",
        zIndex: 9,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar src={Constants.images.userProfile} />
      <Paper
        elevation={5}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "180px",
          height: "180px",
          flexDirection: "column",
        }}
      >
        <CircularProgress variant="indeterminate" />
        <Typography>Loading...</Typography>
      </Paper>
    </Box>
  );
}
