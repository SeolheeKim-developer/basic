import logo from "./logo.svg";
import "./App.css";

function AppJSX() {
  const name = "SEOLHEE";
  const list = ["milk", "strawberry", "banana", "yogurt"];
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
