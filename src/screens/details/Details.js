import { Component } from "react";
import Header from "../../common/header/Header";
import moviesData from "../../common/movieData";
class Details extends Component {
  constructor() {
    super();
    this.state = { movie: {} };
  }
  componentDidMount() {
    let currentState = this.state;
    currentState.movie = moviesData.filter((mov) => {
      return mov.id === this.props.movieId;
    })[0];
    this.setState = currentState;
    console.log(this.state.movie);
  }
  render() {
    return (
      <div className="details">
        {" "}
        <Header />
        Details Page
        <div className="flex-containerDetails">
          <div className="leftDetails">hi</div>
          <div className="middleDetails">hi</div>
          <div className="rightDetails">hi</div>
        </div>
      </div>
    );
  }
}
export default Details;
