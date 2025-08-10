import { AppBar, Box, Button, Toolbar } from '@mui/material'
import { Link } from 'react-router'

const Navbar = () => {
  return (
     <AppBar position="static" elevation={0}>
    <Toolbar sx={{ gap: 1, justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          component="img"
          src="/logo.png"
          alt="Logo"
          sx={{ height: 40, width: 40, cursor: "pointer" }}
          onClick={() => (window.location.href = "/")}
          />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {["myforms", "create", "preview"].map((route) => (
          <Button
          key={route}
          color="inherit"
          component={Link}
          to={`/${route}`}
          sx={{
            position: "relative",
            textTransform: "none",
            fontWeight: 500,
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -8,
              left: "50%",
              width: 0,
              height: "2px",
              backgroundColor: "#f59e0b",
              transition: "all 0.3s ease",
              transform: "translateX(-50%)",
            },
            "&:hover::after": {
              width: "80%",
            },
          }}
          >
            {route.charAt(0).toUpperCase() + route.slice(1)}
          </Button>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar
