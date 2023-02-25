import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";

export default function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("button is clicked");
  };
  return (
    <>
      <button onClick={handleClick}>Button</button>

      <Profile
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        name="Shanon"
        title="front-end developer"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        name="James Kim"
        title="Back-end developer"
      />
      <Profile
        image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        name="Bob Yu"
        title="Back-end Developer"
      />
    </>
  );
}
