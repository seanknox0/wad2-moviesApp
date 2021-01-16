import React from "react";
import { Image } from 'semantic-ui-react'
import PersonHeader from '../headerPerson'
import "./peoplePage.css";

const TemplatePeoplePage = ({ person, children }) => {
  return (
    <>
      <PersonHeader person={person} />
      <div className="row">
        <div className="col-3">
        <Image
          rounded
          size="medium"
          src={
            person.profile_path
              ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
              : "./film-poster-placeholder.png"
          }
          className="person"
          alt={person.name}
        />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplatePeoplePage;