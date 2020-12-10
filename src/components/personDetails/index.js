import React from "react";
import { List, Segment, Header } from 'semantic-ui-react';
import "./personDetails.css";

export default ({ person }) => {
  return (
    <>
      <Segment>
        <Header as="h4">Biography</Header>
        {person.biography}
      </Segment>
      <List>
       <List.Item><b>Known for: </b>{person.known_for_department}</List.Item>
       <List.Item><b>Birthday: </b>{person.birthday}</List.Item>
       <List.Item><b>Gender: </b>{person.place_of_birth}</List.Item>
       <List.Item><b>Spoken Languages: </b>{person.popularity}</List.Item>
      </List>
    </>
  );
};