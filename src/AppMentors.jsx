import React, { useState } from "react";

export default function AppMentors() {
  const [person, setPerson] = useState({
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
  });
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
      <button
        onClick={() => {
          const prev = prompt(`which mentor's name needs to be changed?`);
          const current = prompt(`What is the name?`);
          /*setPerson((prevPerson) => {
            const updatedMentors = prevPerson.mentors.map((mentor) => {
              if (mentor.name === prev) {
                return { ...mentor, name: current };
              }
              return mentor;
            });

            return { ...prevPerson, mentors: updatedMentors };
          });*/
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
              if (mentor.name === prev) {
                return { ...mentor, name: current };
              }
              return mentor;
            }),
          }));
        }}
      >
        Change the name of mentor
      </button>
      <button
        onClick={() => {
          const add = prompt(`which mentor's name needs to be changed?`);
        }}
      >
        Add a mentor
      </button>
      <button
        onClick={() => {
          const remove = prompt(`which mentor's name needs to be changed?`);
        }}
      >
        Delete a mentor
      </button>
    </div>
  );
}
