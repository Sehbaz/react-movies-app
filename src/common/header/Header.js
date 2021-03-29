import React, { Component } from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import TheatersOutlinedIcon from "@material-ui/icons/TheatersOutlined";
import Modal from "react-modal";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import { TextField } from "@material-ui/core/";
import PropTypes from "prop-types";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const TabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 0, textAlign: "center" }}>
      {props.children}
    </Typography>
  );
};
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class Header extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      value: 0,
    };
  }
  openModalHandler = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModelHandler = () => {
    this.setState({
      modalIsOpen: false,
    });
  };
  tabChangeHandler = (event, value) => {
    this.setState({ value });
  };
  render() {
    return (
      <div className="header-container">
        <div>
          <TheatersOutlinedIcon className="logo" />
        </div>
        <div className="form">
          <Button color="inherit" onClick={this.openModalHandler}>
            login
          </Button>
        </div>
        <Modal
          ariaHideApp={false}
          isOpen={this.state.modalIsOpen}
          contentLabel="login"
          onRequestClose={this.closeModelHandler}
          style={customStyles}
        >
          <Tabs
            value={this.state.value}
            onChange={this.tabChangeHandler}
            indicatorColor="primary"
            textColor="primary"
            className="tabs"
          >
            <Tab label="login"></Tab>
            <Tab label="register" />
          </Tabs>
          {this.state.value === 0 && (
            <TabContainer>
              <FormControl required>
                <TextField
                  id="username"
                  label="username"
                  type="text"
                  variant="outlined"
                />
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <TextField
                  id="password"
                  label="password"
                  type="text"
                  variant="outlined"
                />
              </FormControl>

              <br />
              <br />
              <Button variant="contained" color="primary">
                login
              </Button>
            </TabContainer>
          )}
        </Modal>
      </div>
    );
  }
}
export default Header;
