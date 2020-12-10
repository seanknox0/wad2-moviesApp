import React, { useState } from "react";
import PeopleList from "../peopleList";
import PersonFilterControls from "../personFilterControls";
import HeaderPersonList from "../headerPersonList";

const PersonListPageTemplate = ({people, title}) => {
  const [setNameFilter] = useState("");
  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  }

  return (
    <>
      <HeaderPersonList title={title} />
      <PersonFilterControls onUserInput={handleChange}/>
      <PeopleList people={people}/>
    </>
  );
};

export default PersonListPageTemplate ;