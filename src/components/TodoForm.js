import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function TodoForm({
  onSubmit,
  initForm = {
    title: "",
    description: "",
  },
}) {
  const [title, setTitle] = useState(initForm?.title || "");
  const [description, setDescription] = useState(initForm?.description || "");

  useEffect(() => {
    console.log(initForm);
    setTitle(initForm?.title);
    setDescription(initForm?.description);
  }, []);

  return (
    <Box
      sx={{
        marginTop: 15,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography color="primary" component="h1" variant="h3">
        New Todo
      </Typography>
      <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          autoComplete="title"
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="description"
          label="Description"
          type="description"
          id="description"
          autoComplete="current-description"
          multiline
          minRows={5}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="success"
          sx={{ mt: 3, mb: 2 }}
        >
          submit
        </Button>
        <Link to="/" variant="body2">
          <IconButton>
            <ArrowBack />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
}
