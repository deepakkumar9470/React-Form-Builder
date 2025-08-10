
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6366f1", 
      light: "#818cf8",
      dark: "#4338ca",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f59e0b",
      light: "#fbbf24",
      dark: "#d97706",
      contrastText: "#000000",
    },
    background: {
      default: "#0f172a",
      paper: "#1e293b", 
    },
    text: {
      primary: "#f8fafc",
      secondary: "#cbd5e1",
    },
    divider: "#334155",
    success: {
      main: "#10b981",
      light: "#34d399",
      dark: "#059669",
    },
    error: {
      main: "#ef4444",
      light: "#f87171",
      dark: "#dc2626",
    },
    warning: {
      main: "#f59e0b",
      light: "#fbbf24",
      dark: "#d97706",
    },
    info: {
      main: "#3b82f6",
      light: "#60a5fa",
      dark: "#2563eb",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      letterSpacing: "-0.025em",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
      letterSpacing: "-0.025em",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
      letterSpacing: "-0.025em",
    },
    button: {
      fontWeight: 500,
      textTransform: "none",
      letterSpacing: "0.025em",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          minHeight: "100vh",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(30, 41, 59, 0.8)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(51, 65, 85, 0.3)",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: "0 24px",
          minHeight: "64px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          borderRadius: "10px",
          padding: "8px 20px",
          fontSize: "0.95rem",
          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "0 8px 25px rgba(99, 102, 241, 0.3)",
          },
        },
        contained: {
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
          boxShadow: "0 4px 14px 0 rgba(99, 102, 241, 0.4)",
          "&:hover": {
            background: "linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)",
            boxShadow: "0 8px 25px rgba(99, 102, 241, 0.5)",
          },
        },
        outlined: {
          borderColor: "#6366f1",
          color: "#6366f1",
          borderWidth: "2px",
          "&:hover": {
            borderColor: "#8b5cf6",
            backgroundColor: "rgba(99, 102, 241, 0.1)",
            borderWidth: "2px",
          },
        },
        text: {
          color: "#cbd5e1",
          "&:hover": {
            backgroundColor: "rgba(99, 102, 241, 0.1)",
            color: "#f8fafc",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#1e293b",
          border: "1px solid rgba(51, 65, 85, 0.3)",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        },
        elevation1: {
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        },
        elevation4: {
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            backgroundColor: "rgba(30, 41, 59, 0.5)",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#6366f1",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#6366f1",
              borderWidth: "2px",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#6366f1",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "linear-gradient(145deg, #1e293b 0%, #334155 100%)",
          border: "1px solid rgba(51, 65, 85, 0.3)",
          borderRadius: "16px",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(99, 102, 241, 0.2)",
          color: "#c7d2fe",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "rgba(99, 102, 241, 0.3)",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(51, 65, 85, 0.5)",
        },
      },
    },
  },
});

export default darkTheme;
export { default as darkTheme } from './darkTheme';
