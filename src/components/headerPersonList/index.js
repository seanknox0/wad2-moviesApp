import React from "react";
import { Header } from 'semantic-ui-react';

const HeaderPersonList = ({ title }) => {
  return (
    <div className="row">
      <div className="col-md-6 offset-4">
        <Header as="h1">
          {`${title}  `}
        </Header>
      </div>
    </div>
  );
};

export default HeaderPersonList;