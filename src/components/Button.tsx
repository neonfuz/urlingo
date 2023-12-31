import { JSX, ParentComponent } from "solid-js";
import { A } from "solid-start";
import { where } from "../util";

export const Button: ParentComponent<
  { onClick: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent>; } |
  { href: string; }
> = (props) => where({
  buttonClass: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
}, (values) => (
  "onClick" in props ? (
    <button onClick={props.onClick} class={values.buttonClass}>
      {props.children}
    </button>
  ) : (
    <A href={props.href} class={values.buttonClass}>
      {props.children}
    </A>
  )
));
