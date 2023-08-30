import { useState } from "react";
import List from "@mui/material/List";
import TodosListItem from "./TodosListItem";
import TodoDetails from "./TodoDetails";

export default function TodosList({ todos }) {
  const [isDetailsShown, setIsDetailsShown] = useState(false);
  const [activeTodo, setActiveTodo] = useState();

  function handleInfoClicked(todoItem) {
    setIsDetailsShown(true);
    setActiveTodo(todoItem.id);
  }
  function handleClose(e) {
    setIsDetailsShown(false);
  }
  return (
    <>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {todos.map((value, index) => {
          return (
            <TodosListItem
              key={index}
              openDetailsDialog={handleInfoClicked}
              todoItem={value}
            />
          );
        })}
      </List>
      <TodoDetails
        todoId={activeTodo}
        onClose={handleClose}
        open={isDetailsShown}
      />
    </>
  );
}
