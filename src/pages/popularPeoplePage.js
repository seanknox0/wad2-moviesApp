import React, { useContext } from "react";
import PersonListPageTemplate from '../components/templatePeoplePage'
import {MoviesContext} from '../contexts/moviesContext'

const PopularPeoplePage = () => {
  const context = useContext(MoviesContext);
  const people = context.popularPeople.filter( p => p.people );

  return (
    <PersonListPageTemplate
      title={"Popular People"}
      people={people}
    />
  );
};

export default PopularPeoplePage;