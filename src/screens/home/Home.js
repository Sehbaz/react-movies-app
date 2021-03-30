import React, { Component } from "react";
import "./Home.css";

import Button from "@material-ui/core/Button";
import Header from "../../common/header/Header.js";
import { withStyles } from "@material-ui/core/styles";
import moviesData from "../../common/movieData";
import ReactDOM from "react-dom";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import Details from "../details/Details";
import { Typography, TextField } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  upcomingMoviesHeading: {
    textAlign: "center",
    background: "#e9ecef",
    padding: "8px",
    fontSize: "1rem",
  },
  gridListUpcomingMovies: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    width: "100%",
  },
  gridList: {
    flexWrap: "nowrap",

    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },

  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  gridListNewRelease: {
    cursor: "pointer",
  },
  formControl: {
    margin: "10px 0",
    minWidth: 240,
    width: "100%",
  },
  title1: {
    color: theme.palette.primary.light,
  },
  center: {
    textAlign: "center",
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth, moviesName: "", genres: [] };
  }

  movieNameChangeHandler = (event) => {
    this.setState({ moviesName: event.target.value });
  };
  genreSelectHandler = (event) => {
    this.setState({ genres: event.target.value });
  };
  movieClickHandler = (movieId) => {
    ReactDOM.render(
      <Details movieId={movieId} />,
      document.getElementById("root")
    );
  };
  render() {
    const { classes } = this.props;
    let colums = this.state.windowWidth >= 600 ? 5.5 : 2.5;
    let columsHeight = this.state.windowWidth >= 600 ? 350 : 250;
    return (
      <div>
        <Header />

        <div className={classes.upcomingMoviesHeading}>
          <span>New Released Movies</span>
        </div>
        <div className="flex-contanier">
          <div className="left">
            <GridList
              className="mygrid"
              cellHeight={columsHeight}
              cols={colums - 1}
              spacing={20}
              className={classes.gridListNewRelease}
            >
              {moviesData.map((movie) => (
                <GridListTile
                  key={movie.id}
                  onClick={() => this.movieClickHandler(movie.id)}
                >
                  <img src={movie.poster_url} alt={movie.title}></img>
                  <GridListTileBar
                    title={movie.title}
                    classes={{
                      title: classes.title,
                    }}
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
          <div className="right">
            <Card>
              <CardContent className={classes.center}>
                <FormControl className={classes.formControl}>
                  <Typography className={classes.title1}>
                    FIND MOVIES BY :
                  </Typography>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <Typography className={classes.title1}>
                    <TextField
                      fullWidth
                      id="moviename"
                      label="enter movie name "
                      type="text"
                      variant="outlined"
                      onChange={this.movieNameChangeHandler}
                    />
                  </Typography>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <Button variant="contained" color="primary" size="large">
                    APPLY
                  </Button>
                </FormControl>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className={classes.upcomingMoviesHeading}>
          <span>Upcoming Movies</span>
        </div>
        <GridList
          className="mygrid"
          cellHeight={350}
          cols={colums}
          className={classes.gridListUpcomingMovies}
        >
          {moviesData.map((movie) => (
            <GridListTile
              key={movie.id}
              onClick={() => this.movieClickHandler(movie.id)}
            >
              <img src={movie.poster_url} alt={movie.title}></img>
              <GridListTileBar
                title={movie.title}
                classes={{
                  title: classes.title,
                }}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}
export default withStyles(styles)(Home);
