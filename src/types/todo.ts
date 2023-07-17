export enum TodoActionTypes {
  FETCH_TODO = "FETCH_TODO",
  FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
  FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
  SET_TODO_PAGE = "SET_TODO_PAGE"
}

type Todo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export interface TodoState {
  todos: Todo[],
  loading: boolean,
  error: null | string,
  page: number,
  limit: number
}

interface FetchTodoAction {
  type: TodoActionTypes.FETCH_TODO;
}

interface FetchTodoSuccessAction {
  type: TodoActionTypes.FETCH_TODO_SUCCESS,
  payload: any[]
}

interface FetchTodoErrorAction {
  type: TodoActionTypes.FETCH_TODO_ERROR,
  payload: string
}

interface SetTodoPage {
  type: TodoActionTypes.SET_TODO_PAGE,
  payload: number
}

export type TodoAction = FetchTodoErrorAction | FetchTodoSuccessAction | FetchTodoAction | SetTodoPage
