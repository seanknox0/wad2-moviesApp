import React from "react";
import { Segment } from 'semantic-ui-react';

export default ({ review }) => {
  return (
    <>
    <Segment>
      <p>Review By: {review.author} </p>
      <p>{review.content} </p>
    </Segment>
    </>
  );
};