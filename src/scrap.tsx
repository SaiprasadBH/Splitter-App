import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

//const person = "Bheema";
//Greeting element
// const greetingElement = (
//   <div id={"Container"} style={{ backgroundColor: "red" }}>
//     <p>
//       Hello Saiprasad, Welcome to React
//       {person} {1 + 1} {/*this is a comment*/}
//     </p>
//   </div>
// );

//you can use expression slot as well using {} as used above in the jsx body
//also spaces are given with {' '}
//you can write any expression inside expression slot but not statements
//you can use ternary expression,map,fileter,reduce or any expression which produces a value at the end
//but not the statement, something like assignment, if block
//even style is supplied in expression slot itself
//also you can utilize kebabCase instead of using - for convinience, because in javascript keys can't contain -
//if it contains then need to be enclosed in "background-color" Exceptions are aria symbols,data attributes
//you should prove them something like dataId="something", area-label="Greeting Card"

//ReactDOM.createRoot(document.getElementById("root")!).render(greetingElement);

//Custom components
//Custom components starts with capital letter

const Greeting = ({ name }: { name: string }) => (
  <div id={"Container"} style={{ backgroundColor: "red" }}>
    <p>Hello {name}, Welcome to React</p>
  </div>
);

const greetings = (
  <div>
    <Greeting name="Saiprasad"></Greeting>
    <Greeting name="Ghatotgaja"></Greeting>
  </div>
);

//ReactDOM.createRoot(document.getElementById("root")!).render(greetings);

//Button
//Should be wrapping the normal html button.But our Button will have
//a border around it.and we should be able to dynamically pass the color
//of this border and the title of the button should be passed as children to this

//<Button borderColor="red">Press Me</Button>;

const Button = ({
  borderColor,
  children,
}: {
  borderColor: string;
  children: React.ReactNode;
}) => {
  return <button style={{ borderColor }}>{children}</button>;
};

const Buttons = (
  <div style={{ display: "flex", gap: 5 }}>
    <Button borderColor="red">Button1</Button>
    <Button borderColor="green">Button2</Button>
    <Button borderColor="blue">Button3</Button>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")!).render(Buttons);
