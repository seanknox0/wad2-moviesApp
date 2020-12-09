import React, {useContext } from "react";
import { Button, Form, Segment, Header } from 'semantic-ui-react'
import "./reviewForm.css";
import useForm from "react-hook-form";
import {MoviesContext} from '../../contexts/moviesContext'
import { withRouter } from "react-router-dom";

const ReviewForm = ({ movie, history }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const context = useContext(MoviesContext);

  const onSubmit = data => {
    context.addReviewMovies(movie, data)
    history.push("/movies/favorites");
  };

  return (
  <Segment inverted>
  <Header as="h3">Add your review</Header>
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Input
          placeholder="Author"
          defaultValue={movie.review ? movie.review.author : ""}
          ref={register({ required: "Author name required" })} />
        <Form.TextArea 
        placeholder='Write your Review...'
        defaultValue={movie.review ? movie.review.content : ""}
        ref={register({
          required: "No review text",
          minLength: { value: 10, message: "Review is too short" }
        })}
        />
      <Button type='submit'>Submit</Button>
      <Button 
      type="reset"
      onClick={() => {
        reset({
          author: "",
          content: ""
        });
      }}
      >
        Clear
      </Button>
    </Form>
  </Segment>
  );
};

export default withRouter(ReviewForm);