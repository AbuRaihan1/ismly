import {
  Avatar,
  Box,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";
import Constants from "../utils/Constants";

export default function LoadingView() {
  return (
    <Box
      sx={{
        backgroundColor: Constants.colors.halfTransparentBlack,
        display: "flex",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        zIndex: 9,
        alignItems: "center",
        justifyContent: "center",
        top : '0'
      }}
    >
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
