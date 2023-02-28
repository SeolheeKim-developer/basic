import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avartar
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          name="Teri"
          size={200}
        />
        <p>Hello!</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: "tomato" }}>{children}</header>;
}

function Avartar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        hegith={size}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}
