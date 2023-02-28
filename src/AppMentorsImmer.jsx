import React, { useState } from "react";
import { useImmer } from "use-immer";

export default function AppMentors() {
  const [person, updatePerson] = useImmer(initialPerson);
  //const [person, dispatch] = useReducer(personReducer, initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`which mentor's name needs to be changed?`);
    const current = prompt(`What is the name?`);
    updatePerson((person) => {
        const mentor = person.mentors.find(m=>m.name == prev);
        mentor.name = current;
    });
  };
    
  };
  const handleAdd = () => {
    //my solution
    /*const addName = prompt(`Enter a new mentor's name`);
    const addTitle = prompt(`Enter a new mentor's Title`);
    const newMentor = { name: addName, title: addTitle };
    const updatedPerson = {
      ...person,
      mentors: [...person.mentors, newMentor],
    };
    setPerson(updatedPerson);*/
    const name = prompt(`Enter a new mentor's name`);
    const title = prompt(`Enter a new mentor's Title`);
    updatePerson(person =>person.mentors.push({name, title}));
  };
  const handleDelete = () => {
    const name = prompt(`Enter the mentor name for deleting?`);
    updatePerson((person)=>{
        const index = person.mentors.findIndex(m=> m.name ===name);
        person.mentors.splice(index, 1);
    })
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
      <button onClick={handleUpdate}>Change the name of mentor</button>
      <button onClick={handleAdd}>Add a mentor</button>
      <button onClick={handleDelete}>Delete a mentor</button>
    </div>
  );
};

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
