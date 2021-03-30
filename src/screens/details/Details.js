import { Component } from "react";
import Header from "../../common/header/Header";
import moviesData from "../../common/movieData";
import { Typography } from "@material-ui/core";
import "../details/Details.css";
import Home from "../../screens/home/Home";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import YouTube from "react-youtube";
class Details extends Component {
  constructor() {
    super();
    this.state = { movie: {} };
  }
  componentWillMount() {
    let currentState = this.state;
    currentState.movie = moviesData.filter((mov) => {
      return mov.id === this.props.movieId;
    })[0];
    this.setState({ currentState });
  }
  backtohomeHandler = () => {
    ReactDOM.render(<Home />, document.getElementById("root"));
  };
  render() {
    let movie = this.state.movie;
    const opts = {
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <div className="details">
        <Header />
        <div className="back">
          <Button
            variant="outlined"
            color="default"
            startIcon={<ArrowBackIcon />}
          >
            <Typography onClick={this.backtohomeHandler}>
              Back to home
            </Typography>
          </Button>
        </div>
        <div className="flex-containerDetails">
          <div className="leftDetails">
            <img src={movie.poster_url} alt={movie.title}></img>
          </div>
          <div className="middleDetails">
            <div className="movie-title">{movie.title}</div>
            <div>
              <Typography>
                <span className="bold">Genre : </span>
                {movie.genres.join(",")}
              </Typography>
            </div>
            <div>
              <Typography>
                <span className="bold">Duration : </span>
                {movie.duration}
                <span>mins</span>
              </Typography>
            </div>
            <div>
              <Typography>
                <span className="bold">Rating : </span>
                <span>" {movie.censor_board_rating}"</span>
              </Typography>
            </div>
            <div>
              <Typography>
                <span className="bold">Release Date : </span>
                <span>{new Date(movie.release_date).toDateString()}</span>
              </Typography>
            </div>
            <br />

            <div>
              <Typography>
                <span className="bold">Story Line : </span>
                <span>{movie.storyline}</span>
              </Typography>
            </div>
            <br />
            <div className="trailer-container">
              <span className="bold">Trailer : </span>
              <YouTube
                videoId={movie.trailer_url.split("?v=")[1]}
                opts={opts}
                onReady={this._onReady}
              ></YouTube>
            </div>
          </div>
          <div className="rightDetails"></div>
        </div>
      </div>
    );
  }
}
export default Details;
