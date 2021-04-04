import { Component } from "react";
import Header from "../../common/header/Header";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Typography } from "@material-ui/core";
import Details from "../details/Details";
class BookShow extends Component {
  backtohomeHandler = () => {
    ReactDOM.render(<Details />, document.getElementById("root"));
  };
  render() {
    return (
      <div>
        <Header />
        <div className="back">
          <Button
            variant="outlined"
            color="default"
            startIcon={<ArrowBackIcon />}
          >
            <Typography onClick={this.backtohomeHandler}>
              Back to movie details
            </Typography>
          </Button>
        </div>
      </div>
    );
  }
}
export default BookShow;
