//Elementos para definir que es cada elemento
import { PropsWithChildren } from "react";
import './Card.css';

//Coloco las propiedades que yo quiera y luego solo las llamo
interface CardProps {
  title? : string;
}

//Va a traer el componente con ciertas propiedades
const Card = ({children, title, ..._props}: PropsWithChildren<CardProps>)=>{
  return (
    //Para recibir el nombre de una clase se hace con className
    <div className="card">
      {title && (<div className="cardTitle">{title}</div>)}
      {children}
    </div>
  )
}

//La exporto para que pueda llamarla en otro archivos
export default Card;