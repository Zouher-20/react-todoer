import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import { useSelector } from "react-redux";
import { selectTodoById } from "../features/todo/todoSlice";
export default function TodoDetails({ todoId, onClose, open }) {
  const todo = useSelector((state) => selectTodoById(state, todoId));

  return (
    <Dialog fullWidth onClose={onClose} open={open}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {todo?.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {new Date(todo?.createdAt).toDateString()}
          </Typography>
          <Typography sx={{ mb: 1 }} color="text.secondary">
            status :{" "}
            {todo?.checked ? (
              <Chip label="finished" color="success" />
            ) : (
              <Chip label="todo" />
            )}
          </Typography>
          <Typography variant="body2">{todo?.description}</Typography>
        </CardContent>
      </Card>
    </Dialog>
  );
}
