import React, { Component } from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import TheatersOutlinedIcon from "@material-ui/icons/TheatersOutlined";
import Modal from "react-modal";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";

import { InputLabel, Input, TextField } from "@material-ui/core/";
const customStyles = {
  content: {
    border: "1px solid #37474f",
    color: "#37474f",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const customIndicator = {
  content: {
    border: "1px solid #37474f",
    color: "#37474f",
  },
  input: {
    color: "red",
  },
};
const TabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 0 }}>
      {props.children}
    </Typography>
  );
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
          <Button
            variant="outlined"
            onClick={this.openModalHandler}
            style={{
              borderColor: "#37474f",
              color: "37474f",
            }}
          >
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
            TabIndicatorProps={{ style: { background: "#37474f" } }}
          >
            <Tab label="login"></Tab>
            <Tab label="register" />
          </Tabs>
          <TabContainer style={customIndicator}>
            <FormControl required>
              <InputLabel htmlFor="username">Username :</InputLabel>
              <Input id="username" type="text" />
            </FormControl>
            <br />
            <FormControl required>
              <InputLabel htmlFor="password">Password :</InputLabel>
              <Input id="password" type="password" />
            </FormControl>
          </TabContainer>
        </Modal>
      </div>
    );
  }
}
export default Header;
