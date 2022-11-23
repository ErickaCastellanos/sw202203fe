import { Button } from "@components/Buttons/Button";
import { useState } from 'react'; //Permite manejar el estado interno

//Madamos una cadena de texto y de esa forma comunicamos este componente
//con el componente superior
interface IPropsNewTodoForm {
  addTodo: (todo: string) => void;
}

//Contiene los elementos que hemos visto como: Handler y un ChangeHandler
const NewTodoForm = (
  { addTodo = (todo: string) => {} }: IPropsNewTodoForm
) => {
  //Todo lo que haga en el input tengo que establecerle un cambio y establecerlo
  //al todoText
  const [todoText, setTodoText] = useState('');

  //Donde se ingresen los datosw
  const submitHandler = (e: unknown) => {
    addTodo(todoText);
    //Es para que el input quede vacío
    setTodoText('');
  };

  //
  const onChangeHandler = (e: unknown) => {
    (e as {preventDefault: Function}).preventDefault();
    const { value } = (e as {target:{value:string}}).target;
    setTodoText(value);
  };
  return (
    <section className="TodoAddForm">
        {/** Maneja el estado del texto, necesito saber que estados son manejados en este formulario */}
        <input type="text" value={todoText} onChange={onChangeHandler}  />
        <Button onClick={submitHandler}>Add</Button>
    </section>
  );
}

export default NewTodoForm;