import React, { useReducer, useState } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentors() {
  //const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`which mentor's name needs to be changed?`);
    const current = prompt(`What is the name?`);
    dispatch({ type: "updated", prev, current });
    /*setPerson((prevPerson) => {
      const updatedMentors = prevPerson.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return { ...mentor, name: current };
        }
        return mentor;
      });

      return { ...prevPerson, mentors: updatedMentors };
    });*/
    //use Reduer's dispatch instead
    /*setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return { ...mentor, name: current };
        }
        return mentor;
      }),
    }));*/
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
    dispatch({ type: "added", name, title });
    /*setPerson((person) => ({
      ...person,
      mentors: [{ name, title }, ...person.mentors],
    }));*/
  };
  const handleDelete = () => {
    const name = prompt(`Enter the mentor name for deleting?`);
    dispatch({ type: "deleted", name });
    /*setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== name),
    }));*/
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
