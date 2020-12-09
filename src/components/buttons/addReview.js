import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ReviewButton = ({ movie }) => {
  return (
     <Link
        to={{
          pathname: `/reviews/form`,
          state: {
            movie: movie
          }
       }}
     >
    <Button color="green">
    Write a Review
    </Button>
    </Link>
  );
};

export default ReviewButton;