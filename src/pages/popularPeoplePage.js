import React, { useContext } from "react";
import PersonListPageTemplate from '../components/templatePeopleListPage'
import {MoviesContext} from '../contexts/moviesContext'

const PopularPeoplePage = () => {
  const context = useContext(MoviesContext);
  const person = context.popularPeople.filter(((m) => { 
    return !("favorite" in m);
  }));

  return (
    <PersonListPageTemplate
      title={"Popular People"}
      person={person}
    />
  );
};

export default PopularPeoplePage;