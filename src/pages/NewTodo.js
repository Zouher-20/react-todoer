import TodoForm from "../components/TodoForm";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { useNavigate } from "react-router-dom";
export default function NewTodo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const todoToAdd = {
      title: data.get("title"),
      description: data.get("description"),
    };
    dispatch(addTodo(todoToAdd));
    navigate("/");
  };

  return <TodoForm onSubmit={handleSubmit} />;
}
