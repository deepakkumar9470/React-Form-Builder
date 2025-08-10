import { useLocation } from "react-router";
import {
  Paper,
  Typography,
  TextField,
  Checkbox,
  Radio,
  MenuItem,
  Select,
  CircularProgress,
  Box,
} from "@mui/material";
import Loading from "./Loading";

const PreviewForm = () => {
  const { state: form } = useLocation();

  if (!form) {
    return (
      <Loading message="Loading Preview forms..."/>
    );
  }

  return (
    <Paper sx={{ p: 3, m: 2 }}>
      <Typography variant="h6" gutterBottom>
        {form.name}
      </Typography>
      {form.fields.map((field: any) => {
        switch (field.type) {
          case "text":
          case "number":
          case "date":
            return (
              <TextField
                key={field.id}
                label={field.label}
                type={field.type}
                fullWidth
                sx={{ mb: 2 }}
              />
            );
          case "textarea":
            return (
              <TextField
                key={field.id}
                label={field.label}
                multiline
                rows={3}
                fullWidth
                sx={{ mb: 2 }}
              />
            );
          case "checkbox":
            return <Checkbox key={field.id} />;
          case "radio":
            return <Radio key={field.id} />;
          case "select":
            return (
              <Select key={field.id} fullWidth displayEmpty sx={{ mb: 2 }}>
                <MenuItem value="">Select...</MenuItem>
              </Select>
            );
          default:
            return null;
        }
      })}
    </Paper>
  );
};

export default PreviewForm;
