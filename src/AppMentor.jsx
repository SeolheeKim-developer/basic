import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "seolhee",
    title: "Developer",
    mentor: {
      name: "Ellie",
      title: "Senior Developer",
    },
  });
  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>
        {person.name}'s mentor is {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, name: name },
          }));
          console.log(person);
        }}
      >
        Change the name of mentor
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, title: title },
          }));
        }}
      >
        change the title of mentor
      </button>
    </div>
  );
}
