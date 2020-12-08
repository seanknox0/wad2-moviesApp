import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ReviewButton = ({ movie }) => {
  return (
    //<Button
     <Link
        to={{
          pathname: `/reviews/form`,
          state: {
            movie: movie
          }
       }}
     >
    Write a Review
    </Link>
    //</Button>
  );
};

export default ReviewButton;