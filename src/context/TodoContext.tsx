import { Todo } from "../components/TodoItem";
import { createContext, ReactNode, useContext, useState } from "react";
import uuid from "react-native-uuid";

type TodoContextType = {
    todos: Todo[];
    addTodo: (description: string) => void;
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
}

const TodoContext = createContext<TodoContextType>(null!);

export function TodoProvider({ children }: { children: ReactNode }) {
    const [todos, setTodos] = useState<Todo[]>([]);

    function addTodo(description: string) {
        const newTodo: Todo = {
            id: uuid.v4() as string,
            description,
            completed: false
        };

        setTodos([...todos, newTodo]);
    }

    function toggleTodo(id: string) {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        setTodos(updatedTodos);
    }

    function deleteTodo(id: string) {
        const updatedTodos = todos.filter(todo => todo.id !== id);

        setTodos(updatedTodos);
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    );
}

export const useTodo = () => useContext(TodoContext)