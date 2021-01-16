import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import PersonDetails from "../components/personDetails";
import TemplatePeoplePage from "../components/templatePeoplePage";
import usePerson from "../hooks/usePerson";

const PersonPage = props => {
  const { id } = props.match.params;
  const [person] = usePerson(id) 
  return (
    <>
    {person ? (
      <>
        <TemplatePeoplePage person={person}>
          <PersonDetails person={person} />
        </TemplatePeoplePage>
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default withRouter(PersonPage);