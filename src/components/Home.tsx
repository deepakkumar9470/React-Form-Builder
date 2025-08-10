import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";

const Home = () => {
  return (
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
       <Typography variant="h4" sx={{ color: "#cbd5e1" }}>Welcome to Form Builder</Typography>

      <Button
        color="inherit"
        component={Link}
        to="/create"
        sx={{
          display: "block",
          width: "fit-content",
          margin: "20px auto",
          padding: "16px 32px",
          borderRadius: "12px",
          boxShadow: "0 4px 14px 0 rgba(99, 102, 241, 0.4)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 25px rgba(99, 102, 241, 0.5)",
          },
          "& h1": {
            margin: 0,
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#ffffff",
          },
        }}
      >
        Start Here
      </Button>
    </Box>
  );
};

export default Home;
