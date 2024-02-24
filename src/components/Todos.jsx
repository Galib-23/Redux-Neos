import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllTodos from "../services/actions/todosAction";

const Todos = () => {

    const dispatch = useDispatch();

    const { isLoading, todos , error } = useSelector((state) => state);
    
    useEffect(()=>{
        dispatch(getAllTodos());
    }, [])

    return (
        <div>
            <h2>Todos App</h2>
            {
                isLoading && <h3>Loading.....</h3>
            }
            {
                error && <h3>{error.message}</h3>
            }
            <div>
                {
                    todos && todos.map(todo =>{return( <div key={todo.id}>
                        <h4>{todo.id}{". "}{todo.title}</h4>
                    </div>)})
                }
            </div>
        </div>
    );
};

export default Todos;