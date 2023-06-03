import React, { useState } from 'react';
import { addPreferences } from '../utils/postPreferencesApi'; 

export default function UserPreferences() {
  const [movie, setMovie] = useState('');
  const [genre, setGenre] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const preferences = {
      userId: 2,
      preferences: [movie, genre],
      location: location
    };
    try {
      await addPreferences(preferences);
      console.log('Preferences added successfully');
      // TODO: Update UI, display success message, navigate to another page, etc.
    } catch (error) {
      console.error('Error adding preferences:', error);
      // TODO: Display error message to the user or take appropriate error-handling actions
    }
  };

  return (
    <>
      <div className="container user-preferences">
        <div className="row">
          <div className="col s12"><h3> Let us know what you like </h3></div>
          <div className="col s6">
            <div className="row">
              <form className="col s12" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="input-field col s6">
                    <input
                      id="movie"
                      type="text"
                      className="validate"
                      value={movie}
                      onChange={(e) => setMovie(e.target.value)}
                    />
                    <label className="active" htmlFor="movie">Movie choice</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <input
                      id="genre"
                      type="text"
                      className="validate"
                      value={genre}
                      onChange={(e) => setGenre(e.target.value)}
                    />
                    <label htmlFor="genre">Genre choice</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <input id="location"
                      type="text"
                      className="validate"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)} />
                    <label htmlFor="location">Location</label>
                  </div>
                </div>
                <div>
                  <button className="btn waves-effect waves-light" type="submit" name="action">
                    Submit
                    <i className="material-icons right">send</i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col s6">movie column</div>
        </div>
      </div>
    </>
  );
}
