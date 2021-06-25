import React from 'react';
import {UserList} from "./components/UserList";
import {TodoList} from "./components/TodoList";

const App = () => {
    return (
        <div className="App">
            <UserList/>
            <hr />
            <h1> Todo list </h1>
            <TodoList />
        </div>
    );
}

export default App;
