import React, { useState } from "react";
import PeopleList from "../peopleList";
import PersonFilterControls from "../personFilterControls";
import HeaderPersonList from "../headerPersonList";

const PersonListPageTemplate = ({title, person}) => {
  const [nameFilter, setNameFilter] = useState("");
  let displayedPerson = person.filter(p => {
      return p.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });
  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  }

  return (
    <>
      <HeaderPersonList title={title} numPerson={displayedPerson.length} />
      <PersonFilterControls onUserInput={handleChange} numPerson={displayedPerson.length}/>
      <PeopleList
        person={displayedPerson}
      ></PeopleList>
    </>
  );
};

export default PersonListPageTemplate ;