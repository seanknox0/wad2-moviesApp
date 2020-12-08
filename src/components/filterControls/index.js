import React, { useContext } from "react";
import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import "./filterControls.css";
import { GenresContext } from '../../contexts/genresContext' 

const FilterControls = props => {
  const context = useContext(GenresContext);

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };
  const handleGenreChange = e => {
    handleChange(e, "genre", e.target.value);
  };

  return (
    <div className="row bg-success">
      <div className="col-md-12">
        <h4>
          <span>List Filtering:</span>
          <input
            type="text"
            placeholder="Title Search"
            onChange={handleTextChange}
          />
          <span>Genre:</span>
          <select id="genre" onChange={handleGenreChange}>
            {context.genres.map(genre => {
              return (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </select>
        </h4>
      </div>
    </div>
  );
};
/*
<div>
    <Menu attached='top'>
      <Dropdown>
        Genre
        <Dropdown.Menu id="genre" onChange={handleGenreChange}>
            {context.genres.map(genre => {
              return (
                <Dropdown.Item key={genre.id} value={genre.id}>
                  {genre.name}
                </Dropdown.Item>
              );
              })}
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Menu position='right'>
        <div className='ui right aligned category search item'>
          <div className='ui transparent icon input'>
          <span>List Filtering:</span>
          <input
            type="text"
            placeholder="Title Search..."
            onChange={handleTextChange}
           />
            <i className='search link icon' />
          </div>
        </div>
      </Menu.Menu>
    </Menu>
  </div>
  */

export default FilterControls;