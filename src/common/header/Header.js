import React, { Component } from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import TheatersOutlinedIcon from "@material-ui/icons/TheatersOutlined";
import Modal from "react-modal";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

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
    const styles = (theme) => ({
      indicator: {
        backgroundColor: "white",
      },
    });
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
        >
          <Tabs
            value={this.state.value}
            onChange={this.tabChangeHandler}
            TabIndicatorProps={{ style: { background: "#37474f" } }}
          >
            <Tab label="login" />
            <Tab label="register" />
          </Tabs>
        </Modal>
      </div>
    );
  }
}
export default Header;
