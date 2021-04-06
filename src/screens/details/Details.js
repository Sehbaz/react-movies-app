import { Component } from "react";
import Header from "../../common/header/Header";
import moviesData from "../../common/movieData";
import { Typography } from "@material-ui/core";
import "../details/Details.css";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import YouTube from "react-youtube";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
});
class Details extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
    };
  }
  componentWillMount() {
    let currentState = this.state;
    console.log("props" + this.props);
    currentState.movie = moviesData.filter((mov) => {
      return mov.id === this.props.match.params.id;
    })[0];
    console.log(currentState.movie);
  }

  render() {
    let movie = this.state.movie;

    // let artist = this.state.movie.artists;
    const { classes } = this.props;
    const opts = {
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <div className="details">
        <Header id={this.props.match.params.id} showBookShowButton="true" />
        <div className="back">
          <Button
            variant="outlined"
            color="default"
            startIcon={<ArrowBackIcon />}
          >
            <Link to="/" className="link-tag">
              {" "}
              Back to Home
            </Link>
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
                {movie.genres.join(", ")}
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
            <div className="trailer-container roundShadow">
              <span className="bold">Trailer : </span>
              <YouTube
                videoId={movie.trailer_url.split("?v=")[1]}
                opts={opts}
                onReady={this._onReady}
              ></YouTube>
            </div>
          </div>
          <div className="rightDetails">
            {" "}
            <div>
              <Typography>
                <span className="bold">Artist : </span>
                <span>{movie.storyline}</span>
              </Typography>
            </div>
            <div>
              {" "}
              <GridList cellHeight={170} cols={2}>
                {movie.artists.map((artist) => (
                  <GridListTile key={artist.id}>
                    <img src={artist.profile_url} alt={artist.first_name}></img>
                    <GridListTileBar
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                      title={artist.first_name + " " + artist.last_name}
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Details);
