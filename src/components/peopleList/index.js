import React from "react";
import Person from "../peopleCard/";
import "./peopleList.css";

const PeopleList = ({people}) => {
  const peopleCards = people.map(p => (
    <Person key={p.id} people={p} />
  ));
  return <div className="row people bg-dark">{peopleCards}</div>;
};

export default PeopleList;