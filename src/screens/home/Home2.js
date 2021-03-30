import React, { Component } from "react";
import "./Home.css";
import Header from "../../common/header/Header.js";
import { withStyles } from "@material-ui/core/styles";
import moviesData from "../../common/movieData";
import genreData from "../../common/genres";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import {
  Typography,
  TextField,
  Checkbox,
  ListItemText,
} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import genres from "../../common/genres";

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

class Home2 extends Component {
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
  render() {
    const { classes } = this.props;
    let colums = this.state.windowWidth >= 600 ? 5.5 : 2.5;
    return (
      <div>
        <Header />
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
            <GridListTile key={movie.id}>
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
        <div className={classes.upcomingMoviesHeading}>
          <span>New Released Movies</span>
        </div>
        <div className="flex-contanier">
          <div className="left">
            <GridList
              className="mygrid"
              cellHeight={350}
              cols={4}
              spacing={20}
              className={classes.gridListNewRelease}
            >
              {moviesData.map((movie) => (
                <GridListTile key={movie.id}>
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
                      label="moviename "
                      type="text"
                      variant="outlined"
                      onChange={this.movieNameChangeHandler}
                    />
                  </Typography>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel id="select-multiple-checkbox">Genre</InputLabel>
                  <Select
                    multiple
                    input={<Input id="select-multiple-checkbox-genre  " />}
                    renderValue={(selected) => selected.join(",")}
                    value={this.state.genres}
                    onChange={this.genreSelectHandler}
                  >
                    {genreData.map((genre) => (
                      <MenuItem key={genre.id} value={genre.value}>
                        <Checkbox
                          checked={this.state.genres.indexOf(genre.name) > -1}
                        />
                        <ListItemText primary={genre.name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <Typography className={classes.title1}>
                    <TextField
                      fullWidth
                      id="moviename"
                      label="moviename "
                      type="text"
                      variant="outlined"
                      onChange={this.movieNameChangeHandler}
                    />
                  </Typography>
                </FormControl>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Home2);
