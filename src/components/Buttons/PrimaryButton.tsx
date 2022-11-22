import { PropsWithChildren } from "react";
import { Button } from "./Button";

//
export const PrimaryButton = ({
  children,
  className = "",
  ...props
}: PropsWithChildren<{ className?: string }>) => {
  //
  const primaryClassName = [className, "primaryButton"].join(" ");
  return (
    //Mando lo que va a ocuprar las propiedades que va a manadar
    <Button {...props} className={primaryClassName}>
      {children}
    </Button>
  );
};