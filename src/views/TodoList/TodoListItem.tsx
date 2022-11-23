import { ITodo } from './TodoListContainer';

interface ITodoListItemProps {
    listItem: ITodo;
    updateTodoItem: (id: number) => void;
}

//Recibe los componenentes de index
const TodoListItem = ({ listItem, updateTodoItem }: ITodoListItemProps) => {
    //
    return (
        //KeyProp: para saber que se está manejando
        <section key={`todoListItem_${listItem.id}`}>
            <div>{listItem.text}</div>
            <div onClick={() => { updateTodoItem(listItem.id); }}>{listItem.completed ? 'C' : 'P'}</div>
        </section>
    )
}

export default TodoListItem;