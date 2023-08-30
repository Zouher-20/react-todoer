import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";

import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  archiveTodo,
  toggleTodo,
} from "../features/todo/todoSlice";

export default function TodosListItem({ todoItem, openDetailsDialog }) {
  const dispatch = useDispatch();

  function handleToggle() {
    dispatch(toggleTodo(todoItem.id));
  }

  function handleArchive() {
    dispatch(archiveTodo(todoItem.id));
  }

  function handleDelete() {
    dispatch(deleteTodo(todoItem.id));
  }

  return (
    <ListItem
      secondaryAction={
        <div>
          <IconButton
            onClick={() => openDetailsDialog(todoItem)}
            color="secondary"
            size="small"
          >
            <InfoIcon />
          </IconButton>
          <Link to={`/update-todo/${todoItem.id}`}>
            <IconButton color="info" size="small">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton onClick={handleArchive} color="warning" size="small">
            <ArchiveIcon />
          </IconButton>
          <IconButton onClick={handleDelete} color="error" size="small">
            <DeleteIcon />
          </IconButton>
        </div>
      }
      disablePadding
    >
      <ListItemButton onClick={handleToggle}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todoItem.checked}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{ color: "primary" }}
          color="white"
          primary={todoItem.title}
          secondary={dayjs(todoItem.createdAt).fromNow()}
        />
      </ListItemButton>
    </ListItem>
  );
}
