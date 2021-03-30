import { Component } from "react";
import Header from "../../common/header/Header";
import moviesData from "../../common/movieData";
import { Typography } from "@material-ui/core";
import "../details/Details.css";
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
    console.log(currentState);
  }
  render() {
    let movie = this.state.movie;
    console.log(movie.poster_url);
    return (
      <div className="details">
        <Header />
        <div className="flex-containerDetails">
          <div className="leftDetails">
            <img src={movie.poster_url} alt={movie.title}></img>
          </div>
          <div className="middleDetails">
            <div>
              <Typography>
                <span className="bold">Genre : </span>
                {movie.genres.join(",")}
              </Typography>
              <Typography>
                <span className="bold">Title : </span>
                {movie.title}
              </Typography>
            </div>
          </div>
          <div className="rightDetails">hi</div>
        </div>
      </div>
    );
  }
}
export default Details;
