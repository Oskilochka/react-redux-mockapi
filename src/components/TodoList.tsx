import React, {FC, useEffect} from 'react'
import {useTypeSelector} from "../hooks/useTypeSelector";
import {fetchTodos} from "../store/action-creators/todo";
import {useActions} from "../hooks/useActions";

export const TodoList: FC = () => {
    const {todos, error, loading, page, limit} = useTypeSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()
    const pages = [1, 2, 3 ,4 ,5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo => <div key={todo.id}>{todo.id} --- {todo.title}</div>)}
            <div style={{display: 'flex'}}>
                {pages.map(p => <div onClick={() => setTodoPage(p)}
                    style={{border : p === page ? '2px solid green' : '1px solid grey', padding: '5px 10px', cursor: 'pointer'} }>
                    {p}
                </div>)}
            </div>
        </div>
    )
}
