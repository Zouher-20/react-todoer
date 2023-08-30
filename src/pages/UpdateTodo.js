import TodoForm from "../components/TodoForm";
import { useDispatch } from "react-redux";
import { updateTodo } from "../features/todo/todoSlice";
import { useNavigate, useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectTodoById } from "../features/todo/todoSlice";

export default function NewTodo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const todo = useSelector((state) => selectTodoById(state, id));

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newData = {
      title: data.get("title"),
      description: data.get("description"),
    };
    dispatch(updateTodo({ id, newContent: newData }));
    navigate("/");
  };

  return <TodoForm initForm={todo} onSubmit={handleSubmit} />;
}
