import { useState } from "react";
import {
  Box,
  Stack,
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { FaPlus, FaSave, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router";
import type { Field } from "../types/types";

export default function FormBuilder() {
  const [formName, setFormName] = useState("");
  const [fields, setFields] = useState<Field[]>([]);
  const navigate = useNavigate();

  const addField = () => {
    setFields([...fields, { id: Date.now(), label: "", type: "text" }]);
  };

  const updateFieldLabel = (id: number, label: string) => {
    setFields(fields.map((f) => (f.id === id ? { ...f, label } : f)));
  };

  const updateFieldType = (id: number, type: string) => {
    setFields(fields.map((f) => (f.id === id ? { ...f, type } : f)));
  };

  const removeField = (id: number) => {
    setFields(fields.filter((f) => f.id !== id));
  };

  const saveForm = () => {
    if (!formName.trim()) {
      alert("Please enter form name");
      return;
    }
    const savedForms = JSON.parse(localStorage.getItem("forms") || "[]");
    savedForms.push({
      id: Date.now(),
      name: formName,
      createdAt: new Date().toISOString(),
      fields,
    });
    localStorage.setItem("forms", JSON.stringify(savedForms));
    navigate("/myforms");
  };

  return (
    <Paper sx={{ p: 3, m: 2 }}>
      <Typography variant="h6" gutterBottom>
        Form Builder
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 3 }}>
        <TextField
          label="Form Name"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
          fullWidth
        />
        <Button variant="contained" startIcon={<FaPlus />} onClick={addField}>
          Add Field
        </Button>
        <Button
          variant="outlined"
          color="success"
          startIcon={<FaSave />}
          onClick={saveForm}
        >
          Save Form
        </Button>
      </Stack>

      <Stack spacing={2}>
        {fields.map((field) => (
          <Box key={field.id} display="flex" gap={2}>
            <TextField
              label="Field Label"
              value={field.label}
              onChange={(e) => updateFieldLabel(field.id, e.target.value)}
              sx={{ flex: 1 }}
            />
            <FormControl sx={{ minWidth: 150 }}>
              <InputLabel>Type</InputLabel>
              <Select
                value={field.type}
                onChange={(e) => updateFieldType(field.id, e.target.value)}
              >
                <MenuItem value="text">Text</MenuItem>
                <MenuItem value="number">Number</MenuItem>
                <MenuItem value="textarea">Textarea</MenuItem>
                <MenuItem value="select">Select</MenuItem>
                <MenuItem value="radio">Radio</MenuItem>
                <MenuItem value="checkbox">Checkbox</MenuItem>
                <MenuItem value="date">Date</MenuItem>
              </Select>
            </FormControl>
            <IconButton color="error" onClick={() => removeField(field.id)}>
              <FaTrash />
            </IconButton>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}
