import React from "react";
import { Header } from 'semantic-ui-react';
import "../../globals/fontawesome";

const PersonHeader = ({ person }) => {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <Header as="h1">
          {person.name}
          {"  "}
        </Header>
      </div>
    </div>
  );
};

export default PersonHeader;