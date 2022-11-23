import { useState } from "react"; //Hug
import Actions from "./Actions";
import NewTodoForm from "./NewTodoForm";
import TodoListContainer from "./TodoListContainer";
import "./TodoList.css";

const TodoList = () => {
    const [todoList, setTodoList] = useState([
        { id: 1, text: "Todo 1", completed: false },
        { id: 2, text: "Todo 2", completed: true },
        { id: 3, text: "Todo 3", completed: false },
        { id: 4, text: "Todo 4", completed: true },
        { id: 5, text: "Todo 5", completed: false },
    ]);

    const [filterBy, setFilterBy] = useState("Todos");
    const actionHandler = (action: string) => {
        setFilterBy(action);
    };

    /** Tomamos el id que viene del input creamos un nuevo ID
     * segun el contador y con ese ID creamos un nuevo Todo y ese lo
     * ordenamos en un nuevo arreglo normal que se manejará.
     * OJO: no se modifican directamente los que usan useState porque se 
     * pierde la referencia inlcuso la información.
     */
    const addTodo = (todo: string) => {
        const nextId = todoList.length + 1;
        const newTodo = {
            id: nextId,
            text: todo,
            completed: false
        };
        setTodoList([...todoList, newTodo]);
    };

    //
    const toggleCompleted = (id: number) => {
        //Me devuelve un nuevo objeto
        const newTodoList = todoList.map(o => {
            if (o.id === id) {
                o.completed = !o.completed;
            }
            return o;
        });
        setTodoList(newTodoList);
    }

    return (
        <>
            <NewTodoForm addTodo={addTodo} />
            Filtrado por: {filterBy}
            {/** 
             * Si filterBy es igual a todos no va a filtrar nada del list
             * simplemente va a guardar todo lo del estado, devuelve el filtro donde el
             * completado sea igual a comparar el completed si es igual a true entonces me va a
             * devolver solo los completado y asi sucesivamente con Todos o Pendientes
            */}
            <TodoListContainer
                updateTodoItem={toggleCompleted}
                todos={
                    filterBy === "Todos"
                        ? todoList
                        : todoList.filter((o) => o.completed === (filterBy === "Completados"))
                }
            />

            {/** SOLO ES EJEMPLO PARA VER EL OBJETO JSON
             * <section>
                    {JSON.stringify(Todos)}
                </section>
             */}

            <Actions actionHandler={actionHandler} />
        </>
    );
};

export default TodoList;