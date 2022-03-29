import { createSlice } from "@reduxjs/toolkit"

/** Generate Random ID */
import { v4 as uuidv4 } from "uuid";

const initialValue = [
    {
        id: uuidv4(),
        title: "Mengerjakan Exercise",
        completed: true,
    },
    {
        id: uuidv4(),
        title: "Mengerjakan Assignment",
        completed: false,
    },
];

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: initialValue,
        input: "",
    },
    reducers: {
        addTodo: (state, action) => {
            action.payload.e.preventDefault();

            (state.input === "") ?
                alert("Inputan Tidak Boleh Kosong!!!") :
                state.todos = [...state.todos, {
                    id: uuidv4(),
                    title: action.payload.input,
                    completed: false
                }];

            state.input = "";
        },
        deleteTodo: (state, action) => {
            const newListTodo = state.todos.filter((todo) => todo.id !== action.payload);

            state.todos = newListTodo;

        },
        checkedTodo: (state, action) => {
            const newListTodo = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return (
                        {
                            id: todo.id,
                            title: todo.title,
                            completed: action.payload.checked,
                        }
                    );
                }
                else {
                    return (
                        {
                            id: todo.id,
                            title: todo.title,
                            completed: todo.completed,
                        }
                    );
                }
            });

            state.todos = newListTodo;
        },
        updateInput: (state, action) => {
            state.input = action.payload;
        }
    },
})

export const { addTodo, deleteTodo, checkedTodo, updateInput } = todosSlice.actions;

export default todosSlice.reducer;