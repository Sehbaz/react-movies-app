import React, { Component } from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import TheatersOutlinedIcon from "@material-ui/icons/TheatersOutlined";
import Modal from "react-modal";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import { TextField, FormHelperText } from "@material-ui/core/";
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
      username: "",
      usernameRequired: "dispNone",
      password: "",
      passwordRequired: "dispNone",
      firstname: "",
      firstnameRequired: "dispNone",
      lastname: "",
      email: "",
      emailRequired: "dispNone",
      lastnameRequired: "dispNone",
      contact: "",
      contactRequired: "dispNone",
    };
  }
  openModalHandler = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModelHandler = () => {
    this.setState({
      modalIsOpen: false,
      usernameRequired: "dispNone",
      passwordRequired: "dispNone",
      firstnameRequired: "dispNone",
      lastnameRequired: "dispNone",
      contactRequired: "dispNone",
      emailRequired: "dispNone",
    });
  };
  tabChangeHandler = (event, value) => {
    this.setState({ value });
  };
  loginHandler = () => {
    if (this.state.username === "") {
      this.setState({ usernameRequired: "dispBlock" });
    } else {
      this.setState({ usernameRequired: "dispNone" });
    }
    if (this.state.password === "") {
      this.setState({ passwordRequired: "dispBlock" });
    } else {
      this.setState({ passwordRequired: "dispNone" });
    }
  };
  registerHandler = () => {
    if (this.state.firstname === "") {
      this.setState({ firstnameRequired: "dispBlock" });
    } else {
      this.setState({ firstnameRequired: "dispNone" });
    }
    if (this.state.lastname === "") {
      this.setState({ lastnameRequired: "dispBlock" });
    } else {
      this.setState({ lastnameRequired: "dispNone" });
    }
    if (this.state.email === "") {
      this.setState({ emailRequired: "dispBlock" });
    } else {
      this.setState({ emailRequired: "dispNone" });
    }
    if (this.state.password === "") {
      this.setState({ passwordRequired: "dispBlock" });
    } else {
      this.setState({ passwordRequired: "dispNone" });
    }
    if (this.state.contact === "") {
      this.setState({ contactRequired: "dispBlock" });
    } else {
      this.setState({ contactRequired: "dispNone" });
    }
  };
  inputUsernameChangeHandler = (e) => {
    this.setState({ username: e.target.value });
  };
  inputPasswordChangeHandler = (e) => {
    this.setState({ password: e.target.value });
  };
  inputFirstnameChangeHandler = (e) => {
    this.setState({ firstname: e.target.value });
  };
  inputLastnameChangeHandler = (e) => {
    this.setState({ lastname: e.target.value });
  };
  inputEmailChangeHandler = (e) => {
    this.setState({ email: e.target.value });
  };
  inputContactChangeHandler = (e) => {
    this.setState({ contact: e.target.value });
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
            <Tab label="login" />
            <Tab label="register" />
          </Tabs>
          {/*
          
          */}

          {this.state.value === 0 && (
            <TabContainer>
              <FormControl required>
                <TextField
                  id="username"
                  label="username *"
                  type="text"
                  variant="outlined"
                  username={this.state.username}
                  onChange={this.inputUsernameChangeHandler}
                />
                <FormHelperText className={this.state.usernameRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <TextField
                  id="password"
                  label="password *"
                  type="text"
                  variant="outlined"
                  password={this.state.password}
                  onChange={this.inputPasswordChangeHandler}
                />
                <FormHelperText className={this.state.passwordRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>

              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={this.loginHandler}
              >
                login
              </Button>
            </TabContainer>
          )}
          {this.state.value === 1 && (
            <TabContainer>
              <FormControl required>
                <TextField
                  id="firstname"
                  label="firstname *"
                  type="text"
                  variant="outlined"
                  firstname={this.state.firstname}
                  onChange={this.inputFirstnameChangeHandler}
                />
                <FormHelperText className={this.state.firstnameRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <TextField
                  id="lastname"
                  label="lastname *"
                  type="text"
                  variant="outlined"
                  lastname={this.state.lastname}
                  onChange={this.inputLastnameChangeHandler}
                />
                <FormHelperText className={this.state.lastnameRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <TextField
                  id="email"
                  label="email *"
                  type="email"
                  variant="outlined"
                  email={this.state.email}
                  onChange={this.inputEmailChangeHandler}
                />
                <FormHelperText className={this.state.emailRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <TextField
                  id="password"
                  label="password *"
                  type="password"
                  variant="outlined"
                  password={this.state.password}
                  onChange={this.inputPasswordChangeHandler}
                />
                <FormHelperText className={this.state.passwordRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <TextField
                  id="contact"
                  label="contact *"
                  type="phone"
                  variant="outlined"
                  contact={this.state.contact}
                  onChange={this.inputContactChangeHandler}
                />
                <FormHelperText className={this.state.contactRequired}>
                  <span className="red">Required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={this.registerHandler}
              >
                Register
              </Button>
            </TabContainer>
          )}
        </Modal>
      </div>
    );
  }
}
export default Header;
