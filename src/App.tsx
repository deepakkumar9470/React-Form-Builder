import { Suspense } from "react";
import { Outlet, useLocation } from "react-router";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import darkTheme from "./theme/darkTheme";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Loading from "./components/Loading";

export default function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Suspense fallback={<Loading message="Loading navigation..." />}>
        <Navbar />
      </Suspense>

      {isHomePage && (
        <Suspense fallback={<Loading message="Loading home page..." />}>
          <Home />
        </Suspense>
      )}
      <Box
        sx={{
          p: 3,
          minHeight: "calc(100vh - 64px)",
          background: "transparent",
        }}
      >
        <Suspense fallback={<Loading message="Loading form content..." />}>
          <Outlet />
        </Suspense>
      </Box>
    </ThemeProvider>
  );
}
