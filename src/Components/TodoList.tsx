import React from 'react'
import { Todo } from '../model';
import TodoSingle from './Todo';

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className='todos'>
      {todos.map((todo) => (
        <TodoSingle todo={todo} key={todo.id} todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  )
}

export default TodoList