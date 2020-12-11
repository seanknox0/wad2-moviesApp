import React from "react";
import Person from "../peopleCard/";
import "./peopleList.css";

const PeopleList = ({person}) => {
  const peopleCards = person.map(p => (
    <Person key={p.id} person={p} />
  ));
  return <div className="row people bg-dark">{peopleCards}</div>;
};

export default PeopleList;