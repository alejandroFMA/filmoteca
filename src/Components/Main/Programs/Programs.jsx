import React, { useState } from "react";
import axios from "axios";
import "./Programs.css";
import programData from "../../../db.json";

const Programs = () => {
  const API_KEY = "d5b868f7b6ca7c9c83977d28f9d538b6";
  const [selectedFilm, setSelectedFilm] = useState('');
  const [filmDetails, setFilmDetails] = useState('');

  const fetchFilmDetails = async (title) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: API_KEY,
          query: title,
        },
      });

      if (response.data.results.length > 0) {
        const film = response.data.results[0];
        const filmId = film.id;

        const detailsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${filmId}`, {
          params: {
            api_key: API_KEY,
            append_to_response: "credits",
          },
        });

        setFilmDetails({
          title: film.title,
          overview: detailsResponse.data.overview,
          release_date: detailsResponse.data.release_date,
          director: detailsResponse.data.credits.crew.find((crew) => crew.job === "Director")?.name || "Unknown",
        });
        setSelectedFilm(selectedFilm === film.title ? null : film.title);
      }
    } catch (error) {
      console.error("Error fetching film details:", error);
    }
  };

  return (
    <div className="program-container">
      {programData.program.map((day) => (
        <div key={day.date} className="day-row">
          <div className="date">{day.date}</div>
          <div className="films">
            {day.films.map((film, index) => (
              <div key={index} className={`film ${selectedFilm === film.title ? 'selected' : ''}`}>
                <div className="category">{film.category}</div>
                <div className="title" onClick={() => fetchFilmDetails(film.title)}>
                  {film.title}
                </div>
                <div className="time">{film.time}</div>
                {selectedFilm === film.title && filmDetails && (
                  <div className="film-details">
                    <p><strong>Sinopsis:</strong> {filmDetails.overview || "Sin datos"}</p>
                    <p><strong>Fecha de estreno:</strong> {filmDetails.release_date || "Sin datos"}</p>
                    <p><strong>Director:</strong> {filmDetails.director || "Sin datos"}</p>
                  </div>
                )}
              </div>
            )) }
          </div>
        </div>
      ))}
    </div>
  );
};

export default Programs;

