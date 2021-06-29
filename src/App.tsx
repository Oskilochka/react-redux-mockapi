import React from 'react';
import {UserList} from "./components/UserList";
import {TodoList} from "./components/TodoList";
import './App.css'

const App = () => {
    return (
        <div className="App">
            <div className='wrap'>
                <h1> User list </h1>
                <UserList/>
            </div>
            <div className='wrap todoWrap'>
                <h1> Todo list </h1>
                <TodoList/>
            </div>
        </div>
    );
}

export default App;
