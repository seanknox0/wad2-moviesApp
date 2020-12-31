import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
import { getMovieReviews } from "../../api/movie-api";
import { excerpt } from "../../util";

export default ({ movie }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movie.id).then(reviews => {
      setReviews(reviews);
    });
  }, []);
  return (
   <div class="row"> 
    <Table celled inverted selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Author</Table.HeaderCell>
          <Table.HeaderCell>Excerpt</Table.HeaderCell>
          <Table.HeaderCell>More</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {reviews.map(r => {
            return (
              <Table.Row key={r.id}>
                <Table.Cell>{r.author_details.name}</Table.Cell>
                <Table.Cell>{excerpt(r.content)}</Table.Cell>
                <Table.Cell>
                  {" "}
                  <Link
                    to={{
                      pathname: `/reviews/${r.id}`,
                      state: {
                        review: r,
                        movie: movie
                      }
                    }}
                  >
                    Full Review
                  </Link>
                </Table.Cell>
              </Table.Row>
            );
          })}
      </Table.Body>
    </Table>
    </div>
  );
};