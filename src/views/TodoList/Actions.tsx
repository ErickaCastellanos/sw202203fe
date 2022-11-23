import Buttons from "@components/Buttons";
const { Button } = Buttons;

interface IPropsActions {
    actionHandler: (action: string) => void;
}

//
const Actions = ({ actionHandler = (action: string) => { } }: IPropsActions) => {
    //Recibe el evento click
    const clickHandler = (e: unknown) => {
        const { name } = (e as { target: { name: string } }).target;
        actionHandler(name);
    };
    return (
        //Realizamos una seccion con 3 botones
        <section className="TodoListActions">
            <Button name="Todos" onClick={clickHandler}>
                Todos
            </Button>
            <Button name="Pendientes" onClick={clickHandler}>
                Pendientes
            </Button>
            <Button name="Completados" onClick={clickHandler}>
                Completados
            </Button>
        </section>
    );
};

export default Actions;