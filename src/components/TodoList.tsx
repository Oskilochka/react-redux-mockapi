import React, {FC, useEffect} from 'react'
import {useTypeSelector} from "../hooks/useTypeSelector";
import {fetchTodos} from "../store/action-creators/todo";
import {useActions} from "../hooks/useActions";
import './index.css'

export const TodoList: FC = () => {
    const {todos, error, loading, page, limit} = useTypeSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            <div className='pagesWrap'>
                {pages.map(p => <div onClick={() => setTodoPage(p)}
                                     className={p === page ? 'page activePage' : 'page '}>
                    {p}
                </div>)}
            </div>
            {loading
                ? <h1>Loading...</h1>
                : todos.map(todo => <div key={todo.id} className='listItem'>{todo.id}. {todo.title}</div>)
            }
        </div>
    )
}
