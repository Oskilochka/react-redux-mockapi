import React from "react";
import { useTypeSelector } from "hooks/useTypeSelector";
import { useActions } from "hooks/useActions";
import "./index.css";

export const TodoList = React.memo(() => {
  const { todos, error, loading, page, limit } = useTypeSelector(state => state.todo);
  const { fetchTodos, setTodoPage } = useActions();
  const pages = [ 1, 2, 3, 4, 5 ];

  React.useEffect(() => {
    fetchTodos(page, limit);
  }, [ page ]);

  if (error) {
    return <h1>{error}</h1>;
  }

  return <React.Fragment>
    <div className="pagesWrap">
      {pages.map(pageNumber =>
        <div onClick={() => setTodoPage(pageNumber)} className={pageNumber === page ? "page activePage" : "page "}>
          {pageNumber}
        </div>)
      }
    </div>
    {loading
      ? <h1>Loading...</h1>
      : <div>
        {todos.map(todo => <div key={todo.id} className="listItem">{todo.id}. {todo.title}</div>)}
      </div>
    }
  </React.Fragment>;
});
