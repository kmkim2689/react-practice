import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <div>
          <img src={coverImg} alt={title}></img>
          {/* a태그 대신, Link 컴포넌트 이용하여 감싼다 */}
          <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
          <p>{summary}</p>
          <ul>
            {genres.map((genre) => <li key={genre}>{genre}</li>)}
          </ul>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;