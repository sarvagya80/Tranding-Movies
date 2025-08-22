import React from 'react'

const MovieCard = ({ movie }) => {
  // --- IMPROVEMENT #1: Add a "Guard Clause" ---
  // This is the most important change. It checks if the 'movie' object
  // exists and has a title before trying to render anything.
  // If not, it renders nothing and prevents the entire app from crashing.
  if (!movie || !movie.title) {
    return null;
  }

  // --- IMPROVEMENT #2: Safe Destructuring ---
  // We now safely destructure the properties from the 'movie' object
  // only AFTER we have confirmed it exists and is valid.
  const { title, vote_average, poster_path, release_date, original_language } = movie;

  return (
    <div className="movie-card">
      <img
        src={poster_path
          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          : '/no-movie.png'
        }
        alt={title}
      />

      <div className="mt-4">
        <h3>{title}</h3>

        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
          </div>

          <span>•</span>
          <p className="lang">{original_language?.toUpperCase() || 'N/A'}</p>

          <span>•</span>
          <p className="year">
            {release_date ? release_date.split('-')[0] : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard