import React, { useReducer, useState } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`which mentor's name needs to be changed?`);
    const current = prompt(`What is the name?`);
    dispatch({ type: "updated", prev, current });
  };
  const handleAdd = () => {
    const name = prompt(`Enter a new mentor's name`);
    const title = prompt(`Enter a new mentor's Title`);
    dispatch({ type: "added", name, title });
  };
  const handleDelete = () => {
    const name = prompt(`Enter the mentor name for deleting?`);
    dispatch({ type: "deleted", name });
  };
  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>{person.name}'s mentor are :</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button text="Change the name of mentor" onClick={handleUpdate} />
      <Button text="Add a mentor" onClick={handleAdd} />
      <Button text="Delete a mentor" onClick={handleDelete} />
    </div>
  );
}

function Button({ text, onClick }) {
  console.log("Button", text, "re-rendering😋");
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        margin: "0.4rem",
      }}
    >
      {text}
    </button>
  );
}

const initialPerson = {
  name: "seolhee",
  title: "Developer",
  mentors: [
    {
      name: "Ellie",
      title: "Senior Developer",
    },
    {
      name: "Gabriel",
      title: "Senior Developer",
    },
  ],
};
