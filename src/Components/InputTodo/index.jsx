import { useDispatch, useSelector } from "react-redux";

/** Slices */
import { addTodo, updateInput } from "../../features/todosSlice";

/** Styles */
import styles from "./style.module.css";

const InputTodo = () => {
    const input = useSelector((state) => state.todos.input);

    const dispatch = useDispatch();

    return (
        <form className={styles.form_input} onSubmit={(e) => dispatch(addTodo({ input, e }))}>
            <input className={styles.input_text_todo} type="text" value={input} placeholder="Add Todo..." onChange={(e) => dispatch(updateInput(e.target.value))} />
            <button className={styles.btn_submit_todo} type="submit">Submit</button>
        </form>
    );
}

export default InputTodo;