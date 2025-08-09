import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

const FormsList = () => {
  const [forms, setForms] = useState<any[]>([]);

  useEffect(() => {
    setForms(JSON.parse(localStorage.getItem("forms") || "[]"));
  }, []);

  return (
    <Paper sx={{ p: 3, m: 2 }}>
      <Typography variant="h6" gutterBottom>
        My Forms
      </Typography>
      <Button component={Link} to="/create" variant="contained" sx={{ mb: 2 }}>
        Create New
      </Button>
      <List>
        {forms?.map((form) => (
          <ListItem
            key={form.id}
            secondaryAction={
              <Button component={Link} to="/preview" state={form}>
                Preview
              </Button>
            }
          >
            <ListItemText
              primary={form.name}
              secondary={new Date(form.createdAt).toLocaleString()}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default FormsList;
