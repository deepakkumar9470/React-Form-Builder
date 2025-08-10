import { Box, CircularProgress, Typography } from "@mui/material";

const Loading = ({message} : {message: string}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "80vh",
      gap: 2,
    }}
  >
    <CircularProgress
      size={50}
      sx={{
        color: "#6366f1",
      }}
    />
    <Typography variant="h6" sx={{ color: "#cbd5e1" }}>
      {message}
    </Typography>
  </Box>
);

export default Loading;