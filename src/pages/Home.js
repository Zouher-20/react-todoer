import Box from "@mui/material/Box";
import TodosList from "../components/TodosList";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import Fab from "@mui/material/Fab";
import { Add } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectTodos, selectArchivedTodos } from "../features/todo/todoSlice";
import { useMemo, useState } from "react";

function Home() {
  const [showArchived, setShowArchived] = useState(false);
  const mainTodos = useSelector(selectTodos);
  const archivedTodos = useSelector(selectArchivedTodos);
  const todos = useMemo(() => {
    return showArchived ? archivedTodos : mainTodos;
  }, [showArchived, archivedTodos, mainTodos]);

  return (
    <Box
      sx={{
        paddingTop: 15,
        paddingBottom: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ marginBlockEnd: 2 }}
        color="primary"
        component="h1"
        variant="h3"
      >
        TODOer
      </Typography>
      <FormControlLabel
        componentsProps={{ typography: { color: "warning.main" } }}
        onChange={(e, val) => setShowArchived(val)}
        control={<Switch color="warning" />}
        label="Archived"
      />
      <Link to="/new-todo">
        <Fab
          sx={{ position: "fixed", bottom: 30, right: 30 }}
          color="primary"
          aria-label="add"
        >
          <Add />
        </Fab>
      </Link>

      <TodosList todos={todos} />
    </Box>
  );
}
export default Home;
